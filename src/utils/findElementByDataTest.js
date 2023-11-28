export const findElementByDataTest = (wrapper, tag) => {
  return wrapper.find(`[data-test="${tag}"]`);
};
