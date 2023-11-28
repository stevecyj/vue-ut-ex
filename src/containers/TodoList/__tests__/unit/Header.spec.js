// import HelloWorld from "./HelloWorld.vue";
import Header from "@/containers/TodoList/components/Header.vue";
import { shallowMount } from "@vue/test-utils";

it("Header 包含 input 框", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  expect(input.exists()).toBe(true);
});

it("Header input init value ''", () => {
  const wrapper = shallowMount(Header);
  const inputValue = wrapper.vm.inputValue;
  console.log("inputValue", inputValue);
  expect(inputValue).toBe("");
});

it("Header input input值發生變化，數據應該跟著變", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("123");
  const inputValue = wrapper.vm.inputValue;
  expect(inputValue).toBe("123");
});

it("Header input 框輸入 enter，無內容時無反應", () => {
  const wrapper = shallowMount(Header);
  const input = wrapper.find('[data-test="input"]');
  input.setValue("");
  input.trigger("keyup.enter");
  expect(wrapper.emitted().add).toBeFalsy();
});
