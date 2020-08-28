import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload.user
    }
  },
  actions: {
    doLogin: ({commit}, data) => {
      commit('setUser', {user: data})
    },
    doLogout: ({commit}) => {
      commit('setUser', {user: {}})
    }
  }
})

export default store