import { mount } from "@vue/test-utils";
import { findElementByDataTest } from "@/utils";
import TodoList from "@/containers/TodoList/TodoList.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";

describe("TodoList", () => {
  it(`
      1. As a user, I want to input content into a header input box.
      2. As a user, when I click "enter," the list should add an item with the content I entered.
      3. As a user, I expect the list to include a new item with the content I entered.
  `, () => {
    const wrapper = mount(TodoList);
    //const undoList = wrapper.vm.undoList; // 在 TodoList 獲取 undoList 数据

    const inputElem = findElementByDataTest(wrapper, "header-input")[0];
    const content = "JOJO Lee";
    inputElem.setValue(content);
    inputElem.trigger("change");
    inputElem.trigger("keyup.enter");

    const undoListWrapper = wrapper.findComponent(UndoList);
    const undoList = undoListWrapper.vm.list; // 在 UndoList 獲取 undoList 数据
    // console.log("undoList", undoList);

    expect(undoList.length).toBe(1);
    expect(undoList[0].value).toBe(content);
  });
});
