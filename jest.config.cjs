module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+.vue$": "@vue/vue3-jest",
    "^.+js$": "babel-jest",
    "^.+\\.(css|less|scss|sass|style|svg|png|jpe?g|ttf|woff2?)$":
      "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/"],
  testRegex: "(/__tests__/.*|(.|/)(test|spec)).(js|ts)$",
  moduleFileExtensions: ["vue", "js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  coverageReporters: ["text", "json-summary"],
  // Fix in order for vue-test-utils to work with Jest 29
  // https://test-utils.vuejs.org/migration/#test-runners-upgrade-notes
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
