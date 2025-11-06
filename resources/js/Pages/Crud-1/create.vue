<template>
  <masterlayout>
    <div class="header mb-3 py-4 px-3 border-1 rounded">

      <h1 class="h2 ">CRUD - 1</h1>
      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    </div>

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            User List
            <button class="btn btn-md btn-primary"> <- Back to List</button>
          </div>
          <div class="card-body">

            <!-- Table -->
           <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary text-white" style="background-color: #0d6efd;">Submit</button>



          </form>
            

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