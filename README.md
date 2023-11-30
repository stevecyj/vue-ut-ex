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
