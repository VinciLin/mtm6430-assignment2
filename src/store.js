import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUser (state, data) {
      state.users = data
    }

  },

  actions: {
    // updateUser (context) {
    //   context.commit('addUser', res.data)
    //   console.log(state.users)
    // }
    updateUser ({commit}, {name, password, email}) {
      commit('addUser', {name, password, email})
    }
  },

  getters: {
    getUserName: state => state.users.name,
    getUserEmail: state => state.users.email
  }
})
