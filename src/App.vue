<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "./components/layout/AppFooter.vue";
import AppHeader from "./components/layout/AppHeader.vue";

export default {
  components: { AppFooter, AppHeader }
};
</script>

<style lang="scss">
@import "~@/assets/reset.css";

body {
  background-color: rgb(248, 248, 248);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  background-color: rgb(240, 246, 252);
  max-width: $app-max-width;
}
</style>
