import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctors : [],
    isLogin : false,
    name : localStorage.name,
    messages : []
  },
  mutations: {
    GET_DOCTORS(state, payload) {
      state.doctors = payload
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload
    },
    PUSH_MESSAGE(state, payload) {
      console.log(payload);
      state.messages.push(payload)
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
        localStorage.setItem('access_token', data.token)
        localStorage.setItem('name', data.name)
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
    },
    getDoctors({ commit }, payload) {
      axios({
        url: "/doctors",
        method: "GET",
      })
        .then(({data}) => {
          commit('GET_DOCTORS', data)
          console.log(data);
        })
        .catch(err => {
          console.log(err.response);
        })
    }
  },
  modules: {
  }
})
