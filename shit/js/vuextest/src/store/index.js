import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peak: null,
    q: [],
  },
  mutations: {
    enq(state, node) {
      state.q.push(node);
    },
    deq(state) {
      if (state.q.length <= 0) return null;
      state.q.shift();
    }
  },
});
