import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
    // alias: '/about'
  },
  // {
  //   path: "/about",
  //   redirect: { name: "About" }
  // },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    // component: NotFound
  },
  {
    path: "/network-error",
    name: "NetworkError",
    // component: NetworkError
  },
  {
    path: "/event/create",
    name: "EventCreate",
    // component: EventCreate
  },
];

const router = createRouter({
  history: createWebHistory(
    // process.env.BASE_URL
  ),
  routes,
});

export default router;
