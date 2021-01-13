<template>
  <div>
    <h3 class="hint">Selecione seu estado</h3>
    <ul class="ul-state">
      <li v-for="state in states" :key="state.code" class="li-state">
        <router-link :to="{ name: RouteCities, params: { state } }">
          <div class="state-button">{{ state.name }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import StateService from "../../services/StateService";
import { RouteCities } from "../../router/index";

export default {
  data() {
    return {
      RouteCities,
      states: [{ code: "", name: "Carregando..." }]
    };
  },
  created() {
    this.service = new StateService(this.$resource, this.storage);
    this.service.states().then(
      states => {
        this.storage.states = states;
        this.states = states;
      },
      err => {
        this.states = [{ code: "", name: err.message }];
      }
    );
  }
};
</script>

<style lang="scss">
.hint {
  @extend %default-padding;
}

.ul-state {
  @include ul-picker;
}

.li-state {
  @include li-picker-item;
}

.state-button {
  width: 100%;
  color: black;
}
</style>
