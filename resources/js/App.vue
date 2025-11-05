<template>
  <div>
    <h1>🌐 Laravel + Vue Router 4 Example</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/service">Service</RouterLink>
    </nav>

    <hr />

    <!-- এখানে পেজগুলো render হবে -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
nav {
  margin: 10px 0;
}
a {
  text-decoration: none;
  color: #007bff;
}
a.router-link-exact-active {
  font-weight: bold;
  color: #28a745;
}
</style>
