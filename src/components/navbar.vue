<template>
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Mythics Sanctuary</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSup" aria-controls="navbarSup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSup">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about
          ">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pets">Creatures</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/habitat">Habitats</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user">User Page</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  export default{
    computed:{
      user(){
        return this.$store.state.user
      }
    }
  }

</script>

<style scoped>
.navbar{
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  position: fixed;
  width: 100vw;
}
.nav-link, .navbar-brand{
  color: white;
}
.navbar-toggler-icon{
  color: white;
  background-image: url(https://i.postimg.cc/kg8wZhBY/button-removebg-preview-1.png);
  animation: rotation 4s infinite linear;
}

@keyframes rotation{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

</style>
