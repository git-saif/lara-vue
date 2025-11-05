<template>
 <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admin Panel</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">

      <!-- Sidebar -->
      <nav class="col-md-2 d-none d-md-block bg-secondary sidebar vh-100">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item btn btn-primary mb-3 fw-bold text-start">
              <RouterLink to="/" class="btn btn-primary text-white w-100 text-start">
                Home
              </RouterLink>
            </li>
            
            <li class="nav-item btn btn-primary mb-3 fw-bold text-start">
              <RouterLink to="/about" class="btn btn-primary text-white w-100 text-start">
                About
              </RouterLink>
            </li>

            <li class="nav-item btn btn-primary mb-3 fw-bold text-start">
              <RouterLink to="/service" class="btn btn-primary text-white w-100 text-start">
                Service
              </RouterLink>
            </li>

          </ul>
        </div>
      </nav>

      <!-- Content Area -->
      <main class="col-md-10 ms-sm-auto px-md-4 py-4">

        <div class="main-content">

          <RouterView />

        </div>

        

      </main>
      
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-light text-center py-3 mt-auto">
    &copy; 2025 Admin Panel. All rights reserved.
  </footer>
 </div>
</template>




<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>


