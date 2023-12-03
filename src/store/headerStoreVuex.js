import { createStore } from "vuex";
import axios from "axios";

const axiosConfig = {
  baseURL: "http://get",
  timeout: 1000,
};

const store = createStore({
  state: {
    inputValue: "",
    undoList: [],
  },

  actions: {
    getInitList(context) {
      axios
        .get("undoList.json", axiosConfig)
        .then((res) => {
          const { undoList } = res;
          const list = [];
          for (let key in undoList) {
            list.push({
              status: "span",
              value: undoList[key].value,
            });
          }
          context.commit("initList", list);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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

    initList(state, payload) {
      state.undoList = payload;
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
