<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
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
#app {
  font-family: "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;
}
</style>
