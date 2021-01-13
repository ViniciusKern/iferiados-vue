<template>
  <header>
    <router-link :to="{ name: RouteHome }">
      <h1 class="app-title">iFeriados</h1>
    </router-link>
    <router-link v-show="this.showUserPlace" :to="{ name: RouteStates }">
      <user-location-button />
    </router-link>
  </header>
</template>

<script>
import UserLocationButton from "../ui/UserLocationButton";
import { RouteStates, RouteHome } from "../../router/index";

export default {
  data() {
    return {
      RouteStates,
      RouteHome
    };
  },
  components: {
    "user-location-button": UserLocationButton
  },
  computed: {
    showUserPlace() {
      return this.$route.name == RouteHome;
    }
  }
};
</script>

<style lang="scss">
header {
  height: 80px;
  background-color: $primary-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  color: white;
  line-height: 80px;
  text-align: left;
  margin-left: 0.5em;
}
</style>
