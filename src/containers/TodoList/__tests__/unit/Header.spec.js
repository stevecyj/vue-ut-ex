// import HelloWorld from "./HelloWorld.vue";
import Header from "@/containers/TodoList/components/Header.vue";
import { shallowMount } from "@vue/test-utils";
import { findElementByDataTest } from "@/utils";

describe("Header", () => {
  it("Header 樣式發生改變時提示", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
  });

  it("Header 包含 input 框", () => {
    const wrapper = shallowMount(Header);
    const input = findElementByDataTest(wrapper, "input")[0];
    expect(input.exists()).toBe(true);
  });

  it("Header input init value ''", () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.inputValue;
    expect(inputValue).toBe("");
  });

  it("Header input input值發生變化，數據應該跟著變", () => {
    const wrapper = shallowMount(Header);
    const input = findElementByDataTest(wrapper, "input")[0];
    input.setValue("123");
    const inputValue = wrapper.vm.inputValue;
    expect(inputValue).toBe("123");
  });

  it("Header input 框輸入 enter，無內容時無反應", () => {
    const wrapper = shallowMount(Header);
    const input = findElementByDataTest(wrapper, "input")[0];
    input.setValue("");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeFalsy();
  });

  it("Header input 框輸入 enter，有內容時向外觸發事件，同時清空 inputValue", () => {
    const wrapper = shallowMount(Header);
    const input = findElementByDataTest(wrapper, "input")[0];
    input.setValue("123");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.inputValue).toBe("");
  });
});
