import Vue from "vue";
import VueRouter from "vue-router";
import Holidays from "../views/Holidays.vue";

Vue.use(VueRouter);

export const RouteHome = "home";
export const RouteStates = "states";
export const RouteCities = "cities";

const routes = [
  {
    path: "/",
    name: RouteHome,
    component: Holidays
  },
  {
    path: "/estados",
    name: RouteStates,
    component: () =>
      import(/* webpackChunkName: "states" */ "../views/States.vue")
  },
  {
    path: "/cidades",
    name: RouteCities,
    component: () =>
      import(/* webpackChunkName: "cities" */ "../views/Cities.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
