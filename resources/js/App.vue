<template>
  <div>
    <h1 class="2xl">Hello Laravel 10 + Vue.js!</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Welcome to Vue + Laravel!');
function changeMessage() {
  message.value = 'You clicked the button!';
}
</script>

<style scoped>
h1 { color: #4caf50; }
button {
  padding: 8px 15px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;
}
</style>