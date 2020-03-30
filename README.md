# typescript-playground
A TypeScript Playground with Jest and Yarn

This is my playground to get started with [TypeScript](https://www.typescriptlang.org). This project uses [Jest](https://facebook.github.io/jest/)
for *Painless ~~JavaScript~~ TypeScript Testing* and [Yarn](https://yarnpkg.com/en/docs/install) for contemporary package management.

## Setup

```
$ > git clone git@github.com:LiandriCorp/jest-issue-test.git

$ > yarn install

$ > npm run test

> typescript-first-steps@1.0.0 test [snip]/typescript-playground
> yarn lint && jest --coverage

yarn run v1.21.1
$ tslint src/**/*.ts
✨  Done in 0.63s.
ts-jest[main] (WARN) Replace any occurrences of "ts-jest/dist/preprocessor.js" or  "<rootDir>/node_modules/ts-jest/preprocessor.js" in the 'transform' section of your Jest config with just "ts-jest".
 FAIL  src/__tests__/HelloWorld.test.ts
  ● Test suite failed to run

    src/HelloWorld.ts:9:14 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'Timer'.

    9 map.set("1", setTimeout(() => 500));
                   ~~~~~~~~~~~~~~~~~~~~~

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.956s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! typescript-first-steps@1.0.0 test: `yarn lint && jest --coverage`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the typescript-first-steps@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     [snip]/.npm/_logs/2020-03-30T22_42_00_123Z-debug.log
```
