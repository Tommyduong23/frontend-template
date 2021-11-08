import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: false,
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, user) {
      commit('login', user);
    },
  },
});
