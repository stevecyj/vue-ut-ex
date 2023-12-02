import { createStore } from "vuex";

const store = createStore({
  state: {
    inputValue: "",
    undoList: [],
  },

  mutations: {
    changeInputValue(state, payload) {
      state.inputValue = payload;
    },

    addUndoItem(state) {
      state.undoList.push({
        status: "div",
        value: state.inputValue,
      });
    },

    deleteItem(state, payload) {
      state.undoList.splice(payload, 1);
    },

    changeStatus(state, payload) {
      let tmpArr = [...state.undoList];
      tmpArr.forEach((item, i) => {
        if (i === payload) {
          item.status = "input";
        } else {
          item.status = "span";
        }
      });
      state.undoList = tmpArr;
    },

    resetStatus(state) {
      let tmpArr = [...state.undoList];
      tmpArr.forEach((item) => {
        item.status = "span";
      });
      state.undoList = tmpArr;
    },

    changeItem(state, payload) {
      let tmpArr = [...state.undoList];
      tmpArr.forEach((item, i) => {
        if (i === payload.index) {
          item.value = payload.value;
        }
      });
      state.undoList = tmpArr;
    },
  },

  getters: {
    inputValue(state) {
      return state.inputValue;
    },
    undoList(state) {
      return state.undoList;
    },
  },
});

export default store;
