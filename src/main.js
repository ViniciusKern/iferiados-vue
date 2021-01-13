import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import router from "./router";
import ReactiveStorage from "vue-reactive-localstorage";

Vue.use(VueResource);
Vue.http.options.root = "https://vkapps.com.br/api/iferiados";

Vue.use(ReactiveStorage, {
  userState: {
    code: "",
    name: ""
  },
  userCity: {
    id: 0,
    name: ""
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
