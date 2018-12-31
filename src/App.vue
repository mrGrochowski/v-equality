<template>
  <div id="app">
    <div class="withAnimationWraper">
      <div class="withAnimation"></div>
    </div>
    <img
      width="25%"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png"
    />
    <Container />
  </div>
</template>

<script>
import Container from "./components/Container"

export default {
  name: "App",
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
.withAnimationWraper {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.withAnimation {
  width: 100%;
  height: 5px;
  background: #f1f1f1;
  position: relative;
}

.withAnimation:before {
  content: "";
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background: cornflowerblue;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  0% {
    width: 0;
    left: -100%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;
}
</style>
