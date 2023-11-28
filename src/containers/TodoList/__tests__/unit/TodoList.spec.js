// import HelloWorld from "./HelloWorld.vue";
import TodoList from "@/containers/TodoList/TodoList.vue";
import Header from "@/containers/TodoList/components/Header.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  it("TodoItem 初始化時，undoList 為空 array", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    expect(undoList).toEqual([]);
  });

  it("TodoList 監聽到 Header 的 add 事件時，undoList 增加一筆資料", () => {
    const wrapper = shallowMount(TodoList);
    const header = wrapper.findComponent(Header);
    const content = "123";
    header.vm.$emit("add", content);
    const undoList = wrapper.vm.undoList;
    expect(undoList).toEqual([content]);
  });
});
