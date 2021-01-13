<template>
  <div class="no-holidays-pane">
    <v-icon :name="'exclamation-circle'" scale="2" />
    <h3 class="message">
      {{ message() }}
    </h3>
  </div>
</template>

<script>
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/exclamation-circle";
import Types from "../../model/HolidayType";

export default {
  props: ["selectedType"],
  components: {
    "v-icon": Icon
  },
  methods: {
    message() {
      let msg = "";

      if (this.selectedType == Types.All.id) {
        msg = "Carregando feriados...";
      } else {
        if (this.storage.userCity.id > 0) {
          msg = "Nenhum feriado ";

          switch (this.selectedType) {
            case Types.City.id:
              msg += "municipal";
              break;
            case Types.State.id:
              msg += "estadual";
              break;
            default:
              msg += "local";
          }
        } else {
          msg =
            "Selecione seu local para visualizar os feriados estaduais e municipais!";
        }
      }

      return msg;
    }
  }
};
</script>

<style>
.no-holidays-pane {
  padding: 2em;
}

.message {
  padding: 1em;
}
</style>
