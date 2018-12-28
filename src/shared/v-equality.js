import _ from "lodash"
class Equality {
  constructor(el, binding) {
    this._el = el
    this._binding = binding
    this._arrayOfIndependentElems = [
      ...el.querySelectorAll(
        this._binding.value.independent
      )
    ]
  }

  matchRows(baseElement, inde) {
    let el = baseElement
    let independent = inde

    let independentWithPositions = independent.map(
      e => {
        return {
          el: e,
          positionTop: e.getBoundingClientRect()
            .top
        }
      }
    )
    let groupIndependentWithPositions = _.groupBy(
      independentWithPositions,
      "positionTop"
    )

    let clearIndependent = Object.keys(
      groupIndependentWithPositions
    ).map(key => {
      return groupIndependentWithPositions[
        key
      ].map(y => {
        return y.el
      })
    })

    return {
      independent: independent,
      independentWithPositions: independentWithPositions,
      groupIndependentWithPositions: groupIndependentWithPositions,
      clearIndependent: clearIndependent
    }
  }
  matchGroupsInRows(rows, equal) {
    return rows.map(function(e) {
      return equal.map((r, i) => {
        return e.map(rowKey => {
          return rowKey.querySelector(r)
        })
      })
    })
  }
  matchGroupsMaxHeight(groups) {
    return _.flattenDeep(
      groups.map(e => {
        return e.map(f => {
          return {
            els: f,
            max: this.getMinHeight(f)
          }
        })
      })
    )
  }
  getMinHeight(elements) {
    let min = 0
    ;[].forEach.call(elements, element => {
      if (element.offsetHeight > min) {
        min = element.offsetHeight
      }
    })

    return min
  }
  setHeight(elements) {
    elements.map(e => {
      e.els.map(f => {
        f.style.cssText = `height:${e.max}px`
      })
    })
  }
  clearHeight(elements) {
    elements.map(e => {
      e.els.map(f => {
        f.style.cssText = f.style.cssText.replace(
          /height:[\w\s]{1,};/g,
          "height:100%"
        )
      })
    })
  }
  rows() {
    return this.matchRows(
      this._el,
      this._arrayOfIndependentElems
    ).clearIndependent
  }

  groups() {
    return this.matchGroupsInRows(
      this.rows(),
      this._binding.value.equal
    )
  }

  groupsWithMaxHeight() {
    return this.matchGroupsMaxHeight(
      this.groups()
    )
  }
  init() {
    this.clearHeight(this.groupsWithMaxHeight())
    this.setHeight(this.groupsWithMaxHeight())
  }
}
function plugin(Vue, options = {}) {
  Vue.directive("equality", {
    bind(el, binding, vnode) {},
    update(el, binding, vnode) {},
    inserted(el, binding, vnode) {
      let equalityInstance = new Equality(
        el,
        binding
      )
      equalityInstance.init()

      window.addEventListener(
        "resize",
        function() {
          equalityInstance.init()
        }
      )
    }
  })
}

export default plugin
