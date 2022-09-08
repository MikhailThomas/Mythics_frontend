import { createStore } from 'vuex'
import axios from 'axios';
const capProjUrl = "https://mythics-sanctuary.herokuapp.com/";
export default createStore({
  state: {
    monsters: null,
    message: null,
  },
  getters: {
  },
  mutations: {
    setMonsters(state, value) {
      state.monsters = value;
    },
    setMessage(state, value) {
      state.message = value
    },
    setUser(state, user){
      state.user = user
    },
    setUsers(state, users){
      state.users = users
    },
    Logout(state){
      state.user = "",
      state.token = ""
    }
  },
  actions: {
    async fetchMonsters(context) {
      let res = await axios.get(`${capProjUrl}monsters`);
      let {monsters} = await res.data;
      if(monsters){
        context.commit('setMonsters', monsters);
      }else {
        context.commit('setMessage', 'There no monsters');
      }
    }
  },
  modules: {
  }
})
