import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: "",
    userName: "",
    firstEnter: true,
    loading: false
  },
  mutations: {
    SETFIRSTENTER(state, payload) {
      state.firstEnter = payload;
    },
    SETLOADING(state, payload) {
      state.loading = payload;
    },
    SETUSERNAME(state, payload) {
      state.userName = payload;
    }
  },
  actions: {
    loadingHandler(state, payload) {
      state.commit("SETLOADING", payload);
    },
    getNewUserName(state, payload) {
      state.commit("SETUSERNAME", payload);
    }
  },
  modules: {}
})