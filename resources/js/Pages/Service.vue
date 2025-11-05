<template>
  <h1 class="h2 mb-3 py-4 px-3 border-1 rounded">Services</h1>

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            User List
            <button class="btn btn-sm btn-primary"> + Add User</button>
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
</template>

<script setup>
import MasterLayout from '../App.vue'
</script>

<!-- <script>
export default {
  name: "Service",
};
</script> -->
