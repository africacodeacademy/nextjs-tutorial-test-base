# nextjs-tutoral-test-base

This is a starter template for [Learn Next.js](https://nextjs.org/learn), including files and setup for testing with Jest and Testing Library.

## Installation

- Clone repository
- Run `npm install`

## Running tests

This repository comes with test in the `pages-test` folder (tests cannot live alongside the pages in the `pages` folder, because NextJS will consider them a separate page). The `package.json` file has an test script that will run when you run `npm test` from the command-line.

After installing, run `npm test`.

Then type `a` to run **all** tests (as opposed to tests since last commit).

You should get output similar to this:

```
PASS  pages-tests/index.test.jsx
  ✓ App renders user name (40 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.478 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
