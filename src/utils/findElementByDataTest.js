export const findElementByDataTest = (wrapper, tag) => {
  return wrapper.findAll(`[data-test="${tag}"]`);
};
