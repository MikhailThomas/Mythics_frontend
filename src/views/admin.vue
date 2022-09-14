<template>
    <div class="admin">
      <div class="container pt-5">
        <h1>USERS</h1>
          <div class="table-responsive">
        <table class="table">
          <tr>
            <th class="table__heading">ID</th>
            <th class="table__heading">User Name</th>
            <th class="table__heading">User Surname</th>
            <th class="table__heading">Email</th>
            <th class="table__heading">Edit User</th>
          </tr>
          <tbody v-if="users">
            <tr class="table__row" v-for="user in users" :key="user" :user="user">
              <td class="table__content" data-heading="ID">{{ user.id }}</td>
              <td class="table__content" data-heading="User Name">
                {{ user.userName }}
              </td>
              <td class="table__content" data-heading="User Surname">
                {{ user.userSurname }}
              </td>
              <td class="table__content" data-heading="Email">
                {{ user.userEmail }}
              </td>
              <td class="table__content" data-heading="Edit User">
                <button
                    data-bs-toggle="modal" :data-bs-target="`#editUser`+user.id"
                    class="btn rounded rounded-1"
                  >
                    Edit
                  </button>
                  <br>
                  <br>
                  <button
                    data-bs-toggle="modal" :data-bs-target="`#deleteUser`+user.id"
                    class="btn rounded rounded-1"
                  >
                    Delete
                  </button>
                  <EditUser :user="user" />
                  <DeleteUser :user="user" />
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        <br />
        <h1>Monsters</h1>
        <div class="table-responsive">
          <table class="table table-white table-hover">
            <thead>
              <tr>
                <th class="table__heading">ID</th>
                <th class="table__heading">Monster Name</th>
                <th class="table__heading">Descrip</th>
                <th class="table__heading">Monster Image</th>
                <th class="table__heading">Price</th>
                <th class="table__heading">Difficulty</th>
                <th class="table__heading">Habitat</th>
                <th class="table__heading">Delivery</th>
                <th class="table__heading">Location</th>
                <th class="table__heading">Size</th>
                <th class="table__heading">
                  <button
                    data-bs-toggle="modal" data-bs-target="#addmonster"
                    class="btn-add rounded rounded-1"
                  >
                    ADD
                  </button>
                  <AddMonster :monster="monster" />
                </th>
              </tr>
            </thead>
            <tbody v-if="monsters">
              <tr v-for="monster in monsters" :key="monster" :monster="monster">
                <th class="table__content" data-heading="ID">{{ monster.monsterID }}</th>
                <th class="table__content" data-heading="monster Name">{{ monster.species }}</th>
                <th class="table__content" data-heading="Descrip">{{ monster.description }}</th>
                <th class="table__content" data-heading="monster Image">
                  <img class="img-fluid" :src="monster.img" alt="monster" />
                </th>
          <th class="table__content" data-heading="Price">{{ monster.price }}</th>
                <th class="table__content" data-heading="Location">{{ monster.location }}</th>
                <th class="table__content" data-heading="Delivery">{{ monster.delivery }}</th>
                <th class="table__content" data-heading="Habitat">{{ monster.habitat }}</th>
                <th class="table__content" data-heading="Size">{{ monster.size }}</th>
                <th class="table__content" data-heading="Difficulty">{{ monster.difficulty }}</th>
                <th class="table__content" data-heading="ADD">
                  <button
                    data-bs-toggle="modal" :data-bs-target="`#editMonster`+monster.id"
                    class="btn rounded rounded-1"
                  >
                    Edit
                  </button>
                  <br>
                  <br>
                  <button
                    data-bs-toggle="modal" :data-bs-target="`#deleteMonster`+monster.id"
                    class="btn rounded rounded-1"
                  >
                    Delete
                  </button>
                  <Editmonster :monster="monster" />
                  <DeleteMonster :monster="monster" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Editmonster from '@/components/editmonster.vue';
 
  
  
  
  export default {
  
    components: { Editmonster },
    mounted() {
      this.$store.dispatch("getMonsters");
      this.$store.dispatch("getUsers");
    },
    computed: {
      monsters() {
        return this.$store.state.monsters;
      },
      users() {
        return this.$store.state.users;
      },
      user(){
        return this.$store.state.user
      }
    },
  
  }
  </script>
  
  <style scoped>
  
  .admin{
    background: linear-gradient(rgba(0, 0, 0, 0.56), black), url(https://i.postimg.cc/2yrmBwmF/grassland-landscape.jpg) center/ cover no-repeat;
    background-attachment: fixed;
  }
  
  .table__heading { border-bottom: 2px solid  #3591c3; }
   @media (max-width: 800px) {
   .table__heading {
  display: none;
  }
   .table__content {
   display: block;
   padding: .5rem 0;
  }
   .table__row {
   margin: .25rem 1rem;
   padding: .5rem 0;
   display: block;
   border-bottom: 2px solid  #C37935;
  }
   .table__content:before {
   content: attr(data-heading);
   display: inline-block;
   width: 5rem;
   margin-right: .5rem;
   color: #999;
   font-size: .75rem;
   font-weight: 700;
   text-transform: uppercase;
   letter-spacing: 2px;
  }
  .btn-add{
      background-color: black;
      color: white;
  }
  }
  
  table{
      color: black;
    background-color: rgb(242, 242, 242);
    padding: 60px !important;
  }
  
  .table{
      color: black;
    background-color: rgb(242, 242, 242);
    padding: 50px !important;
  }
  
  .img-fluid {
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow-x: hidden;
    aspect-ratio: 1;
  }
  
  .btn{
      border: 1px solid black;
  }
  
  h1{
    color: white;
  }
  
  </style>