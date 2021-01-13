<template>
  <nav>
    <ul class="holiday-type-ul">
      <li
        v-for="(option, index) in options"
        :key="option.name"
        :class="[{ selected: index == selectedType }, 'li-holiday-type']"
      >
        <div class="holiday-type-button" @click="setSelectedType(index)">
          {{ option.name.toUpperCase() }}
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import Types from "../../model/HolidayType";

export default {
  props: ["selectedType"],
  data() {
    return {
      options: [Types.All, Types.Country, Types.State, Types.City]
    };
  },
  methods: {
    setSelectedType(type) {
      this.$emit("selectedItemChanged", type);
    }
  }
};
</script>

<style lang="scss">
#holiday-type-nav,
.holiday-type-ul {
  width: 100%;
}

.li-holiday-type {
  display: inline-block;
  background-color: white;
  border-radius: 10px;
  width: 22%;
  margin: 1em 1% 1em 1%;
  cursor: pointer;
  border: 1px solid #ebebeb;
}

.holiday-type-button {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 0.8em;

  @include mobile {
    font-size: 0.6em;
  }
}

.selected {
  background-color: $primary-color;
  color: white;
  cursor: default;
}
</style>
