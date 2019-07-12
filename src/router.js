import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: "/",
      name: "home-page",
      component: Home
    },
    {
      path: "/result",
      name: "result-page",
      component: () => import("./views/Result.vue")
    },
  
  ]
});
