// import HelloWorld from "./HelloWorld.vue";
// import HelloWorld from "../src/components/HelloWorld.vue";
import HelloWorld from "../src/App.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { propsData: { msg: "Hello World" } });
    expect(wrapper.text()).toContain("Hello World");
  });
});
