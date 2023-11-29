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
    const countElem = findElementByDataTest(wrapper, "count");
    const listItems = findElementByDataTest(wrapper, "item");
    console.log("countElem =====> ", countElem);
    expect(countElem[0].text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });

  it("when UndoList has three items should count is three and contain three items", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: ["item1", "item2", "item3"],
      },
    });
    const countElem = findElementByDataTest(wrapper, "count");
    const listItems = findElementByDataTest(wrapper, "item");
    expect(countElem[0].text()).toEqual("3");
    expect(listItems.length).toEqual(3);
  });
});
