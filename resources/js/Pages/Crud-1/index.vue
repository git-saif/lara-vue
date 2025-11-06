<template>
  <masterlayout>
    <div class="header mb-3 py-4 px-3 border-1 rounded">

      <h1 class="h2 ">CRUD - 1</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            User List
            <router-link to="/crud-1/create" class="btn btn-sm btn-primary"> + Add User</router-link>
          </div>
          <div class="card-body">

            <!-- Table -->
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Sl</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            

            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>


  </masterlayout>
</template>

<script setup>
import MasterLayout from '../../App.vue'
</script>


<!-- <script>
export default {
  name: "Dashboard",
};
</script> -->