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
import Crud_1Create from "../Pages/Crud-1/create.vue";
// edit crud-1
import EditCrud_1 from "../Pages/Crud-1/edit.vue";

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/service', name: 'service', component: Service }, // 👈 New Route
  { path: '/crud-1', name: 'crud-1', component: Crud_1 }, // New Route
  { path: '/crud-1/create', name: 'crud-1-create', component: Crud_1Create },
  { path: '/crud-1/edit/:id', name: 'crud-1-edit', component: EditCrud_1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
