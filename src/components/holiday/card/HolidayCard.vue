<template>
  <div class="holiday-card">
    <div class="cell cell-calendar">
      <calendar-pane :day="holiday.dayOfMonth()" :month="holiday.month()" />
    </div>
    <div class="cell cell-info">
      <div class="title">
        {{ holiday.name }}
      </div>
      <div class="info type">
        {{ holiday.type.toUpperCase() }}
      </div>
      <div class="info fullDate">{{ holiday.fullDate() }}</div>
      <div class="info countdown">
        {{ holiday.countdown() }}
      </div>
    </div>
    <div @click="toggleInfo()" class="cell cell-open">
      <v-icon :name="buttonIcon()"></v-icon>
    </div>
    <transition name="fade">
      <div v-show="this.showInfo" class="info details">
        {{ holiday.info }}
        <pre>{{ holiday.mobileDates }}</pre>
      </div>
    </transition>
  </div>
</template>

<script>
import Calendar from "./Calendar";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/angle-down";
import "vue-awesome/icons/angle-up";

export default {
  props: ["holiday"],
  components: {
    "calendar-pane": Calendar,
    "v-icon": Icon
  },
  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    },
    buttonIcon() {
      return this.showInfo ? "angle-up" : "angle-down";
    }
  }
};
</script>

<style lang="scss">
.holiday-card {
  margin: 1em auto;
  background-color: white;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  padding: 0.8em;
  display: block;
  box-shadow: 0 0 0.2em 0 #ebebeb;
}

.title {
  font-weight: bold;
  font-size: 1.5em;

  @include mobile {
    font-size: 1.1em;
  }
}

.info {
  display: block;
  margin-top: 0.4em;
}

.details {
  padding: 1em;
}

.type,
.countdown {
  font-size: 0.8em;
}

.fullDate {
  @include mobile {
    font-size: 0.8em;
  }
}

.cell {
  display: table-cell;
  vertical-align: middle;
}

.cell-calendar {
  width: 20%;
}

.cell-info {
  width: 70%;
  text-align: left;
  padding-left: 10px;
}

.cell-open {
  width: 10%;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
