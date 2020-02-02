import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
  },
  mutations: {
    pushToHistory(state, id) {
      state.history.push({ id, date: moment() });
    }
  },
  actions: {
    pushToHistory({commit}, id) {
      commit('pushToHistory', id);
    },
  },
  getters: {
    getHistory(state) {
      return state.history;
    }
  }
})
