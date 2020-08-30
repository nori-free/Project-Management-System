import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const initialState = {
  user: {}
}

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    setUser: (state, payload) => {
      state.user = payload.user
      console.log(state.user)
    }
  },
  actions: {
    doLogin: ({commit}, data) => {
      console.log('set user', {user: {
        name: data.idToken.payload.name,
        email: data.idToken.payload.email
      }})
      commit('setUser', {user: {
        name: data.idToken.payload.name,
        email: data.idToken.payload.email
      }})
    },
    doLogout: ({commit}) => {
      commit('setUser', {user: {}})
    }
  },
  getters: {
    isLoggedin: state => Boolean(state.user.name)
  },
  plugins: [createPersistedState()]
})

export default store