import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    childCount: 0,
  },
  mutations: {
    changeCount(state, data) {
      state.childCount = data;
    },
  },
});

export default store;
