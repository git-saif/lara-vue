<template>
  <div>
    <!-- Header -->
    <Header/>

    <div class="container-fluid">
      <div class="row">

        <!-- Sidebar -->
        <Sidebar />

        <!-- Content Area -->
        <main class="col-md-10 ms-sm-auto px-md-4 py-4">
          <div class="main-content">
            <!-- Page Render From Here -->
            <RouterView />
          </div>
        </main>

      </div>
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>
