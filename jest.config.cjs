module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+.vue$": "@vue/vue3-jest",
    "^.+js$": "babel-jest",
    "^.+\\.(css|less|scss|sass|style|svg|png|jpe?g|ttf|woff2?)$":
      "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/", ".eslintrc.cjs"],
  testRegex: "(/__tests__/.*|(.|/)(test|spec)).(js|ts)$",
  moduleFileExtensions: ["vue", "js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/", "/vite.config.js"],
  coverageReporters: ["text", "lcov"],
  // Fix in order for vue-test-utils to work with Jest 29
  // https://test-utils.vuejs.org/migration/#test-runners-upgrade-notes
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
