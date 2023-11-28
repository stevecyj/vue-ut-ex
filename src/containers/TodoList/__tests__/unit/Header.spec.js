// import HelloWorld from "./HelloWorld.vue";
import Header from "@/containers/TodoList/components/Header.vue";
import { shallowMount } from "@vue/test-utils";

it("Header 包含 input 框", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  expect(input.exists()).toBe(true);
});
