<template>
  <masterlayout>
    <div class="header mb-3 py-4 px-3 border-1 rounded">

      <h1 class="h2 ">CRUD - 1</h1>
      <p>This is a simple hero information.</p>
    </div>

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            User List

            <div class="d-flex align-items-center gap-2">
              <!-- Number Selector -->
              <select class="form-select form-select-sm" style="width: 70px;">
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>

              <!-- Add User Button -->
              <router-link to="/crud-1/create" class="btn btn-sm btn-primary">
                + Add User
              </router-link>
            </div>
          </div>

          <div class="card-body">

            <!-- Table -->
            <table class="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Sl</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <span class="badge rounded-pill bg-success">Active</span>
                  </td>
                  <td>
                    <router-link to="/crud-1/edit" class="btn btn-sm btn-primary mx-1">Edit</router-link>
                    <router-link to="/crud-1/delete" class="btn btn-sm btn-danger mx-1">Delete</router-link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <span class="badge rounded-pill bg-danger">Inactive</span>
                  </td>
                  <td>
                    <router-link to="/crud-1/edit" class="btn btn-sm btn-primary mx-1">Edit</router-link>
                    <router-link to="/crud-1/delete" class="btn btn-sm btn-danger mx-1">Delete</router-link>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <span class="badge rounded-pill bg-warning">Pending</span>
                  </td>
                  <td>
                    <router-link to="/crud-1/edit" class="btn btn-sm btn-primary mx-1">Edit</router-link>
                    <router-link to="/crud-1/delete" class="btn btn-sm btn-danger mx-1">Delete</router-link>
                  </td>
                </tr>
                
              </tbody>
            </table>
            
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link active" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
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