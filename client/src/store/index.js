import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    login({ commit }, payload) {
      axios({
        url: "/login",
        method: "POST",
        data : payload
      })
      .then(({data}) => {
        console.log(data);
        localStorage.setItem('access_token', data.token)
        commit('SET_ISLOGIN', true)
        router.push('/')
      })
      .catch(err => {
        console.log(err.response);
      })
    },
    register({ commit }, payload) {
      axios({
        url: "/register",
        method: "POST",
        data : payload
      })
      .then(({data}) => {
        router.push('/verification')
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
      })
    },
    logout({commit}) {
      localStorage.clear()
      commit('SET_ISLOGIN', false)
    }
  },
  modules: {
  }
})
