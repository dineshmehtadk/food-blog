// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import MenuPage from "@/pages/MenuPage";
import Booking from "@/pages/Booking";
import BlogPage from "@/pages/BlogPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import Contactpage from "@/pages/Contactpage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
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
   {
    path: "/blog",
    name: "BlogPage",
    component: BlogPage,
  },
   {
    path: "/blog-details",
    name: "BlogDetailsPage",
    component: BlogDetailsPage,
  },
     {
    path: "/contact",
    name: "ContactPage",
    component: Contactpage,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
