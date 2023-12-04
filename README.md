# Vue 3 + Vite + Jest

## cli error

> ReferenceError: module is not defined in ES module scope

This file is being treated as an ES module because it has a '.js' file extension and '/Usersxxxxx/xxxxx/projects-practice/vue-test/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

    at file:///Usersxxxxx/xxxxx/projects-practice/vue-test/jest.config.js:1:1
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

* jest.config.js → jest.config.cjs

> You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.

        at /Users/xxxxx/projects-practice/vue-test/babel.config.js

* babel.config.js → babel.config.cjs

## jest.config.cjs

### packages

```bash
npm i -D babel-jest @vue/vue3-jest jest-transform-stub jest-serializer-vue
```

### jest.config.cjs

```js
module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+.vue$": "@vue/vue3-jest",
        "^.+js$": "babel-jest",
        "^.+\\.(css|less|scss|sass|style|svg|png|jpe?g|ttf|woff2?)$": "jest-transform-stub",
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
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    coverageReporters: ["text", "json-summary"],
    // Fix in order for vue-test-utils to work with Jest 29
    // https://test-utils.vuejs.org/migration/#test-runners-upgrade-notes
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
};
```

## use jest

## todo

* use blur event to trigger data update

## BDD

* 先寫 code ，再寫測試
* 改 integration test
* 用戶行為是什麼樣子，哪些是重要的，哪些是不重要的
  + 點擊 header 的時候，UndoList 會顯示
  + header 和 UndoList 一起測試
  + 用戶在 input 輸入內容，按下 enter，UndoList 會新增一個項目
  + 用戶的行為過程稱為 story

## 非同步測試

* 前端只關注在接收到正確、錯誤的數據後，如何處理
  + 不關注數據是否正確

## containers 檔案目錄結構

```
.
├── containers(views)
│   └── TodoList
│       ├── TodoList.vue
│       ├── components
│       │   ├── UndoList.vue
│       │   └── Header.vue
│       ├── __mocks__
│       └── __tests__
│           ├── integraton
│           └── unit
```
