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
import Service from "../Pages/Service.vue"; // 👈 নতুন page import

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/service', name: 'service', component: Service },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
