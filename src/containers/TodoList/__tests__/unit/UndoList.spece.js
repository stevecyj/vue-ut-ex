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
    expect(countElem[0].text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });

  it("when UndoList has three items should count is three and contain three items and delete buttons exist", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const countElem = findElementByDataTest(wrapper, "count");
    const listItems = findElementByDataTest(wrapper, "item");
    const deleteButtons = findElementByDataTest(wrapper, "delete-button");
    expect(countElem[0].text()).toEqual("3");
    expect(listItems.length).toEqual(3);
    expect(deleteButtons.length).toEqual(3);
  });

  it("when delete button in UndoList is clicked should emit delete event", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const deleteButtons = findElementByDataTest(wrapper, "delete-button");
    deleteButtons[1].trigger("click");
    expect(wrapper.emitted().delete).toBeTruthy();
    expect(wrapper.emitted().delete[0][0]).toBe(1);
  });

  it("when input in UndoList is clicked should emit status event", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const listItems = findElementByDataTest(wrapper, "item");
    listItems[1].trigger("click");
    expect(wrapper.emitted().status).toBeTruthy();
    expect(wrapper.emitted().status[0][0]).toBe(1);
  });

  it("when undoList item status is input, should render input, otherwise span", () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: "input", value: 1 },
          { status: "span", value: 2 },
          { status: "span", value: 3 },
        ],
      },
    });
    const inputElem = findElementByDataTest(wrapper, "input");
    const spanElem = findElementByDataTest(wrapper, "span");
    expect(inputElem.length).toBe(1);
    expect(spanElem.length).toBe(2);
  });
});
