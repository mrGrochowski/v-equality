import _ from "lodash"
/*
function groupBy(arr, key) {
  return arr.reduce(function(prev, next) {
    ;(prev[next[key]] =
      prev[next[key]] || []).push(next)
    return prev
  }, {})
}*/
/*function plugin (Vue, options = {}) {
  Vue.directive('match-heights', {
    bind (el, binding) {
      function matchHeightsFunc () {
        matchHeights(binding.value.el, binding.value.disabled || options.disabled || []);
      }
      matchHeightsFunc();
      window.addEventListener('resize', matchHeightsFunc);
      Vue.nextTick(matchHeightsFunc);
    },

    inserted (el, binding) {
      function matchHeightsFunc () {
        matchHeights(binding.value.el, binding.value.disabled || options.disabled || []);
      }

      // Handle images rendering
      [].forEach.call(document.querySelectorAll(binding.value.el), (el) => {
        [].forEach.call(el.querySelectorAll('img'), (img) => {
          img.addEventListener('load', matchHeightsFunc);
        });
      });

      // Bind custom events to recalculate heights
      el.addEventListener('matchheight', matchHeightsFunc, false);
      document.addEventListener('matchheight', matchHeightsFunc, false);
    },

    unbind (el, binding) {}
  });
}*/

//import _ from "lodash"

function matchRows(baseElement, inde) {
  let el = baseElement
  let independent = [...el.querySelectorAll(inde)]

  let independentWithPositions = independent.map(
    e => {
      return {
        el: e,
        positionTop: e.getBoundingClientRect().top
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
    return groupIndependentWithPositions[key].map(
      y => {
        return y.el
      }
    )
  })

  //console.log(groupIndependentWithPositions)
  return {
    independent: independent,
    independentWithPositions: independentWithPositions,
    groupIndependentWithPositions: groupIndependentWithPositions,
    clearIndependent: clearIndependent
  }
}
function matchGroupsInRows(rows, equal) {
  return rows.map(function(e) {
    return equal.map((r, i) => {
      return e.map(rowKey => {
        return rowKey.querySelector(r)
      })
    })
  })
}
function getMinHeight(elements) {
  let min = 0
  ;[].forEach.call(elements, element => {
    if (element.offsetHeight > min) {
      min = element.offsetHeight
    }
  })

  return min // max in reality
}
function setHeight(element) {}
function clearHeight() {}
function plugin(Vue, options = {}) {
  Vue.directive("equality", {
    bind(el, binding, vnode) {},
    update(el, binding, vnode) {},
    inserted(el, binding, vnode) {
      let rows = matchRows(
        el,
        binding.value.independent
      ).clearIndependent

      let groups = matchGroupsInRows(
        rows,
        binding.value.equal
      )

      let groupsWithMaxHeight = _.flattenDeep(
        groups.map(e => {
          return e.map(f => {
            return {els: f, max: getMinHeight(f)}
          })
        })
      )

      groupsWithMaxHeight.map(e => {
        e.els.map(f => {
          f.style.cssText = `height:${e.max}px`
        })
      })

      window.addEventListener("resize", () => {})
    }
  })
}

export default plugin
