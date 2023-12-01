import { createStore } from "vuex";

const store = createStore({
  state: {
    inputValue: "",
  },

  mutations: {
    changeInputValue(state, payload) {
      state.inputValue = payload;
    },
  },
});

export default store;
