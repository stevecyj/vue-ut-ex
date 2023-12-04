import { mount } from "@vue/test-utils";
import { findElementByDataTest } from "@/utils";
import TodoList from "@/containers/TodoList/TodoList.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
import store from "@/store/headerStoreVuex";

describe("TodoList", () => {
  it(`
      1. As a user, I want to input content into a header input box.
      2. As a user, when I click "enter," the list should add an item with the content I entered.
      3. As a user, I expect the list to include a new item with the content I entered.
  `, () => {
    const wrapper = mount(TodoList, {
      global: {
        plugins: [store],
      },
    });
    //const undoList = wrapper.vm.undoList; // 在 TodoList 獲取 undoList 数据

    const inputElem = findElementByDataTest(wrapper, "header-input")[0];
    const content = "JOJO Lee";
    inputElem.setValue(content);
    inputElem.trigger("change");
    inputElem.trigger("keyup.enter");

    const undoListWrapper = wrapper.findComponent(UndoList);
    const undoList = undoListWrapper.vm.list; // 在 UndoList 獲取 undoList 数据

    expect(undoList.length).toBe(1);
    expect(undoList[0].value).toBe(content);
  });

  it(`
      1. 用戶進入頁面時，請求遠端數據
      2. 列表項目展示遠端數據
  `, (done) => {
    const wrapper = mount(TodoList, {
      global: {
        plugins: [store],
      },
    });

    wrapper.vm.$nextTick(() => {
      const items = findElementByDataTest(wrapper, "item");
      expect(items.length).toBe(3);
      done();
    });

    // const undoList = wrapper.vm.undoList;
    // expect(undoList.length).toBe(3);
  });
});
