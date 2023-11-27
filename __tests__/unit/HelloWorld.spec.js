// import HelloWorld from "./HelloWorld.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: "Hello World" },
    });
    expect(wrapper.text()).toContain("Hello World");
  });
});
