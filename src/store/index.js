import { createStore } from 'vuex'
import axios from 'axios';
const capProjUrl = 'https://mythics-sanctuary.herokuapp.com';

export default createStore({
  state: {
    monsters: null,
    monster:null,
    user:null,
    users:null,
    favourite:null,
    token:null
  },

  getters: {

  },

  mutations: {
    setMonsters(state, monsters) {
      state.monsters = monsters;
    },
    setMonster(state, monster) {
      state.monster = monster
    },
    setUser(state, user){
      state.user = user
    },
    setUsers(state, users){
      state.users = users
    },
    setToken(state, token){
      state.token = token 
    },
    setUserFavourite(state, favourite){
      state.favourite = favourite
    },
    Logout(state){
      state.user = "",
      state.token = ""
    }
  },
  actions: {

    async getMonsters(context){
      let fetched = await fetch('https://mythics-sanctuary.herokuapp.com/monsters');
      let res = await fetched.json();
      context.commit('setMonsters', res.monsters)
    },
    async getUsers(context){
      let fetched = await fetch('https://mythics-sanctuary.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers', res.users)
    },
    async getMonster(context, payload){
      let fetched = await fetch('https://mythics-sanctuary.herokuapp.com/monsters/' + payload);
      let res = await fetched.json();
      context.commit('setMonster', res.monsters)
    },

    async fetchMonsters(context) {
      let res = await axios.get(`${capProjUrl}monsters`);
      let {monsters} = await res.data;
      if(monsters){
        context.commit('setMonsters', monsters);
      }else {
        context.commit('setMessage', 'There no monsters');
      }
    },

    login(context, payload){
      const {email, password} = payload;
      fetch('https://mythics-sanctuary.herokuapp.com/users', {
        method: 'PATCH',
        body: JSON.stringify({
          emailAddress: email,
          password : password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      })
      .then(res => res.json())
      .then(data => {
        if (data.msg == "Email Not Found"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Not Found. Please register',
          })
        } else {
          if(data.msg == 'Password is Incorrect') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Password is Incorrect',
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Welcome to Mythics Sanctuary',
              text: '',
            })
            context.commit('setUser', data.user)
            context.commit('setToken', data.token)
            console.log(data.token);
            console.log(data.user)
            // context.dispatch('getUserCart')
           }
          }
        });
      },
      register(context, payload){
        const {name, surname, email, password} = payload
        fetch('https://mythics-sanctuary.herokuapp.com/users', {
          method: 'POST',
          body: JSON.stringify({
            firstName: name,
            lastName: surname,
            emailAddress: email,
            password: password
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.msg == "This email already exists") {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'The provided email already exists.Please try another one',
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: "Registration Successful",
              text: '',
            })
            context.commit('setToken',data.token);
          }
        });
      },
      
      async editMonster(context,payload){
        fetch('https://mythics-sanctuary.herokuapp.com/monsters/'+ payload.id, {
            method:'PUT',
            body: JSON.stringify(payload),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((res)=> res.json())
        .then((data)=> context.dispatch('getMonsters'));
    },
    async addMonster(context,payload){
      fetch('https://mythics-sanctuary.herokuapp.com/monsters', {
          method:'POST',
          body: JSON.stringify(payload),
          headers:{
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getMonsters'));
  },
    async deleteMonster(context, id){
        fetch('https://mythics-sanctuary.herokuapp.com/monsters/'+ id, {
            method:'DELETE'
        })
        .then((res)=> res.json())
        .then((data)=>{
        context.dispatch('getMonsters')
      })
    },
  },
  modules: {
  }
})
