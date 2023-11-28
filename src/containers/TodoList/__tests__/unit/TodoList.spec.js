// import HelloWorld from "./HelloWorld.vue";
import TodoList from "@/containers/TodoList/TodoList.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  it("TodoItem 初始化時，undoList 為空 array", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList
    expect(undoList).toEqual([]);
  });
});
