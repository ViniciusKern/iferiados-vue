<template>
  <section id="holidays-section">
    <holiday-types-menu
      :selectedType="selectedType"
      @selectedItemChanged="setSelectedType"
    />

    <transition-group
      v-if="filteredHolidays.length > 0"
      name="holidays-transition"
    >
      <section v-for="holiday in filteredHolidays" :key="holiday.id()">
        <holiday-card :holiday="holiday" />
      </section>
    </transition-group>
    <no-holidays-pane v-else :selectedType="this.selectedType" />
  </section>
</template>

<script>
import HolidayTypesMenu from "../components/ui/HolidayTypesMenu";
import HolidayCard from "../components/holiday/card/HolidayCard";
import NoHolidaysPane from "../components/holiday/NoHolidaysPane";
import Types from "../model/HolidayType";
import HolidayService from "../services/HolidayService";

export default {
  components: {
    "holiday-types-menu": HolidayTypesMenu,
    "holiday-card": HolidayCard,
    "no-holidays-pane": NoHolidaysPane
  },
  methods: {
    setSelectedType(type) {
      this.selectedType = type;
    }
  },
  computed: {
    filteredHolidays() {
      if (this.selectedType == Types.All.id) {
        return this.holidays;
      } else {
        return this.holidays.filter(h => h.typeId == this.selectedType);
      }
    }
  },
  data() {
    return {
      selectedType: Types.All.id,
      selectedStateId: -1,
      selectedCityId: -1,
      holidays: []
    };
  },
  created() {
    this.service = new HolidayService(this.$resource);

    this.service
      .holidays(this.storage.userState.code, this.storage.userCity.id)
      .then(
        holidays => (this.holidays = holidays),
        err => console.log(err.message)
      );
  }
};
</script>

<style>
#holidays-section {
  min-height: 76vh;
}
.holidays-transition-enter-active {
  transition: opacity 0.2s linear;
}
.holidays-transition-enter,
.holidays-transition-leave-to {
  opacity: 0;
}
</style>
