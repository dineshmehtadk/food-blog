// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home";
import Aboutus from "@/pages/Aboutus";
import MenuPage from "@/pages/MenuPage";
import Booking from "@/pages/Booking";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "Aboutus",
    component: Aboutus,
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuPage,
  },
    {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
