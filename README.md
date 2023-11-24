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
