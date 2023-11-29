// import HelloWorld from "./HelloWorld.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
import { shallowMount } from "@vue/test-utils";
import { findElementByDataTest } from "@/utils";

describe("UndoList.vue", () => {
  it("when UndoList is empty should count is zero and contain no items", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [],
      },
    });
    // const countElem = findElementByDataTest(wrapper, "count");
    // const listItems = findElementByDataTest(wrapper, "list-item");
    // expect(countElem.text()).toEqual("0");
    // expect(listItems.length).toEqual(0);
  });
});
