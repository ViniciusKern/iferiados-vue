<template>
  <div class="calendar">
    <div class="calendar-head">
      {{ this.month }}
    </div>
    <div class="calendar-body">
      {{ this.day }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["day", "month"]
};
</script>

<style lang="scss">
.calendar {
  width: 100px;
  font-weight: bold;
  margin: 1em;

  @include mobile {
    width: 70px;
    margin: 0;
  }
}

.calendar-head {
  background-color: $primary-color;
  line-height: 16px;
  font-size: 1em;
  color: white;
  padding: 5px;
  border-radius: 10px 10px 0 0;

  @include mobile {
    font-size: 0.7em;
    line-height: 12px;
  }
}

.calendar-body {
  background-color: rgb(238, 238, 238);
  line-height: 60px;
  font-size: 3em;
  border-radius: 0 0 10px 10px;

  @include mobile {
    line-height: 40px;
    font-size: 2.2em;
  }
}
</style>
