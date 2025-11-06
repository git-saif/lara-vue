<template>
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
            
            <li class="nav-item btn btn-primary mb-3 fw-bold text-start">
              <RouterLink to="/crud-1" class="btn btn-primary text-white w-100 text-start">
                CRUD-1
              </RouterLink>
            </li>

          </ul>
        </div>
      </nav>
</template>