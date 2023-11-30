// import HelloWorld from "./HelloWorld.vue";
import TodoList from "@/containers/TodoList/TodoList.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
import Header from "@/containers/TodoList/components/Header.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  it("TodoItem 初始化時，undoList 為空 array", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    expect(undoList).toEqual([]);
  });

  it("監聽到 Header 的 add 事件時，undoList 增加一筆資料", () => {
    const wrapper = shallowMount(TodoList);
    // 這裡是整合測試
    // const header = wrapper.findComponent(Header);
    // const content = "123";
    // header.vm.$emit("add", content);
    // const undoList = wrapper.vm.undoList;
    // expect(undoList).toEqual([content]);

    // 這裡是單元測試，when Header invokes add should TodoList undoList length +1
    const undoList = wrapper.vm.undoList;
    const list = [
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ];
    list.forEach((item) => {
      wrapper.vm.undoList.push(item);
    });
    wrapper.vm.addUndoItem(4);
    expect(undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
      { status: "div", value: 4 },
    ]);
  });

  it("when invokes UndoList should pass list parameter", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.findComponent(UndoList);
    const list = undoList.props("list");
    expect(list).toBeTruthy();
  });

  it("when invokes handleDeleteItem should UndoList length -1", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    const list = [
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ];
    list.forEach((item) => {
      wrapper.vm.undoList.push(item);
    });
    wrapper.vm.handleItemDelete(1);
    expect(undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 3 },
    ]);
  });

  it("when invokes changeStatus should div in UndoList change to input", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    const list = [
      { status: "span", value: 1 },
      { status: "span", value: 2 },
      { status: "span", value: 3 },
    ];
    list.forEach((item) => {
      wrapper.vm.undoList.push(item);
    });
    wrapper.vm.changeStatus(1);
    expect(undoList).toEqual([
      { status: "span", value: 1 },
      { status: "input", value: 2 },
      { status: "span", value: 3 },
    ]);
  });

  it("when invokes resetStatus should status in UndoList change ", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    const list = [
      { status: "span", value: 1 },
      { status: "input", value: 2 },
      { status: "span", value: 3 },
    ];
    list.forEach((item) => {
      wrapper.vm.undoList.push(item);
    });
    wrapper.vm.resetStatus();
    expect(undoList).toEqual([
      { status: "span", value: 1 },
      { status: "span", value: 2 },
      { status: "span", value: 3 },
    ]);
  });
});
