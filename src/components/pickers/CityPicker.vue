<template>
  <div>
    <h2 class="state-title">{{ state.name }}</h2>
    <input
      type="search"
      @input="filter = $event.target.value"
      class="filter"
      placeholder="Digite o nome da cidade"
    />
    <h3 class="hint">Selecione sua cidade</h3>
    <ul class="ul-city">
      <li
        v-for="city in filteredCities"
        :key="city.id"
        class="li-city"
        @click="setUserCity(city)"
      >
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import CityService from "../../services/CityService";
import { RouteHome } from "../../router/index";

export default {
  data() {
    return {
      cities: [{ code: "", name: "Carregando..." }],
      state: this.$route.params.state,
      filter: "",
      RouteHome
    };
  },
  methods: {
    setUserCity(city) {
      this.storage.userCity = { id: city.id, name: city.name };
      this.storage.userState = { name: this.state.name, code: this.state.code };

      this.$router.push({ name: RouteHome });
    }
  },
  computed: {
    filteredCities() {
      if (this.filter) {
        let exp = RegExp(this.filter.trim(), "i");
        return this.cities.filter(c => exp.test(c.name));
      } else {
        return this.cities;
      }
    }
  },
  created() {
    this.service = new CityService(this.$resource, this.storage);
    this.service.cities(this.state.code).then(
      cities => {
        this.storage.cities[this.state.code] = cities;
        this.cities = cities;
      },
      err => {
        this.cities = [{ code: "", name: err.message }];
      }
    );
  }
};
</script>

<style lang="scss">
.hint {
  @extend %default-padding;
}

.ul-city {
  @include ul-picker;
}

.li-city {
  @include li-picker-item(2.5em);
}

.state-title {
  margin-top: 0.5em;
}

.filter {
  display: block;
  margin: 0.5em auto;
  width: 90%;
  text-align: center;
  padding: 0.6em;
  border: 1px solid rgb(189, 189, 189);
  border-radius: 1em;
}
</style>
