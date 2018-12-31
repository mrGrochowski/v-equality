<template>
  <div class="container">
    <h2>
      Equality Height in Vue with v-equality
    </h2>

    <div
      class="row"
      v-equality="{
        independent: '.card',
        equal: ['.card__header', '.card__content']
      }"
    >
      <div class="column" v-for="i in changes">
        <card
          :heading="
            heading[Math.floor(Math.random() * 3)]
          "
          :content="msg[i % 3]"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>
import Row from "./Row"
import Card from "./Card"
import Vue from "vue"
import Equality from "../shared/v-equality.js"

Vue.use(Equality)
// Vue.directive("equality", {
//   bind: function(el, binding, vnode) {
//     let independent = [
//       ...el.querySelectorAll(
//         binding.value.independent
//       )
//     ]
//     console.log(el)
//     console.log(binding.value)
//     console.log(independent)
//   },
//   update: function(el, binding, vnode) {}
// })
import chance from "chance"
export default {
  name: "Container",
  data() {
    return {
      msg: [
        "facere magnam saepe quasi nobis illo omnis quidem corrupti id hic cumque expedita necessitatibus temporibus exercitationem ducimus. Commodi?Qui ratione explicabo reprehenderit! Qui eveniet dolor eius itaque voluptates laborum quas in commodi nihil! Sapiente aut perspiciatis est atque saepe accusamus a fuga, optio ullam libero incidunt assumenda commodi?",
        " Fugiat beatae perspiciatis vero. Accusamus, sapiente eligendi! Eos earum, possimus esse impedit culpa molestias quibusdam! Ipsam odio officia doloremque praesentium, deleniti tempore optio. Labore voluptatum nesciunt amet ipsam aliquam porro?",
        "Accusantium iusto maiores voluptatibus autem dolorum quo quaerat saepe ipsa, voluptatem explicabo doloremque fugiat hic corrupti excepturi dolores tempore assumenda maxime debitis, tempora id atque qui? Expedita eum id placeat."
      ],
      heading: [
        "Little heading",
        "Mediuuuuuum heading",
        "Large heading as much is posibble, of course, mey be longer but for this example is enough"
      ],
      changes: 10
    }
  },
  methods: {
    todo: function() {
      const self = this
      this.intervalid1 = setInterval(function() {
        self.changes = Math.floor(
          Math.random() * 10 + 2
        )
      }, 5000)
    }
  },
  components: {
    Card
  },
  mounted() {
    this.todo()
  }
}
</script>
<style lang="scss" scoped>
@import "../shared/variables.scss";
@import "../shared/bootstrap-silent-grid.scss";

.container {
  @extend %container-fluid;
}
.row {
  @extend %row;
}

.column {
  @extend %col-12,
    %col-lg-4,
    %col-xl-3,
    %col-xxx-2,
    %col-ul;
}
</style>
