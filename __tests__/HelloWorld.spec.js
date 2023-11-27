// import HelloWorld from "./HelloWorld.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { propsData: { msg: "Hello World" } });
    expect(wrapper.text()).toContain("Hello World");
  });
});
