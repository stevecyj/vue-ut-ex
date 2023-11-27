// import HelloWorld from "./HelloWorld.vue";
import TodoList from "@/containers/TodoList/TodoList.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoList", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(TodoList);
  });
});
