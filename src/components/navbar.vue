<template>
  <div id="nav">
      <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
      <ul class="menu__box">
        <li v-if="user">
            <router-link class="menu__item" to="/user"><img src="" alt="">img</router-link>
        </li>
        <li>
            <router-link class="menu__item" to="/">Home</router-link>
        </li>
        <li>
            <router-link class="menu__item" to="/login">Login</router-link>
        </li>
            <li v-if="user">
                <router-link class="menu__item" to="/pets">Pets</router-link>
            </li>
            <li v-if="user">
                <router-link class="menu__item" to="/habitat">Habitats</router-link>
            </li>
        <li>
            <router-link class="menu__item" to="/about">About</router-link>
        </li>
        <li v-if="user">
            <router-link v-if="user[0].userRole == 'admin'" class="menu__item" to="/admin">Admin</router-link>
        </li>
            <li>
                <router-link class="menu__item" to="/contact">Contact</router-link>
            </li>
    </ul>
  </div>
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
#nav{
  height: 0;
}
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 5%;
  left: 20px;
  width: 26px;
  cursor: pointer;
  z-index: 99;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: black;
  transition-duration: 0.25s;
  z-index: 999;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition-duration: 0.5s;
}
.menu__item {
    display: block;
  padding: 12px;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;
}
</style>
