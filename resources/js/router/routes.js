// import { createRouter } from "vue-router";


// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//   ],
// });


import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import About from '../Pages/About.vue';
import Service from "../Pages/Service.vue"; // 👈 New Page Import
import Crud_1 from "../Pages/Crud-1/index.vue"; // New Page Import

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/service', name: 'service', component: Service }, // 👈 New Route
  { path: '/crud-1', name: 'crud-1', component: Crud_1 }, // New Route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
