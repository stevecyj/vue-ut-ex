const undoList = [
  { status: "span", value: "dell lee" },
  { status: "span", value: "lee" },
  { status: "span", value: "dell" },
];
export default {
  get(url) {
    if (url === "undoList.json") {
      return new Promise((resolve, reject) => {
        const data = {
          success: true,
          undoList,
        };
        resolve(data);
      });
    } else {
      return new Promise((resolve, reject) => {
        const data = {
          success: true,
        };
        resolve(data);
      });
    }
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      const data = {
        success: true,
        data: params,
      };
      resolve(data);
    });
  },
};
