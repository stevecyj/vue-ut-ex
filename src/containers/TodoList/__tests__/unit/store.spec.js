import store from "@/store/headerStoreVuex";

describe("store", () => {
  it("當 store 接受 changeInputValue 的 commit 時，inputValue 發生變化", () => {
    const inputValue = "JOJO Lee";
    store.commit("changeInputValue", inputValue);
    expect(store.state.inputValue).toBe(inputValue);
  });
});
