import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    asideOpen: false,
  },
  mutations: {
    TOGGLE_ASIDE(state) {
      state.asideOpen = !state.asideOpen;
    },
  },
  actions: {},
  modules: {},
});
