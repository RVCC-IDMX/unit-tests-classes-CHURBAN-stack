# JS Unit Testing Classes

<p align="center">

<a href="#node-badge">
  <img alt="code language: NodeJS" src="https://img.shields.io/badge/language%3A-NodeJS-brightgreen"></a>

<a href="#eslint-badge">
  <img alt="code linter: eslint" src="https://img.shields.io/badge/linter%3A-ESLint-blue"></a>

<a href="#airbnb-badge">
  <img alt="code style: Airbnb" src="https://img.shields.io/badge/style%3A-Airbnb-red"></a>

<a href="#prettier-badge">
  <img alt="code formatter: prettier" src="https://img.shields.io/badge/formatter%3A-Prettier-pink"></a>

<a href="#jest-badge">
  <img alt="unit test: jest" src="https://img.shields.io/badge/unit%20test%3A-Jest-brown"></a>

</p>

This project is written in [Node](https://nodejs.org/en/), and tested with [Jest - the delightful JavaScript Testing Framework](https://jestjs.io/).

---

## The assignment

When npm runs Jest, all the tests are failing as seen at the end of its output to the console.

Fixing the code will make the tests pass and show in green in the console.

<div style="padding-top: 3rem;"></div>

# Instructions

## Install your dependencies

`npm install`

<p style="font-size: 1.5em;">ESLint and Prettier need the modules installed before you begin editing.<p>

---

## Start with the Geometry classes

### Edit files in this order

1. polygon.js
2. triangle.js
3. rectangle.js
4. square.js

---

### Run tests

`npm test -- geometry.test.js`

OR

`npx jest tests/geometry.test.js`

---

## Second do the Thermometer class

### Edit the src file

1. thermometer.js

### Test

`npm test -- thermometer.test.js`

OR

`npx jest tests/thermometer.test.js`

---

Eslint needs to be properly running in this repo.

Be careful of any squigglies and get them properly fixed (do not add any eslint disable comments)

---

## GitHub Actions are configured to run the tests when you push

The .github folder is configured to run GitHub actions when there is a push. You will see results of this in the Actions tab in your GitHub repo.

---

## Continue writing and fixing code until all tests pass

When you see the individual files are completed, and the tests are passing, the following command will run Jest on all the files in the repo that end in test.js

`npm test`

You should output that includes a table at the end looking like this:

<img width="683" alt="test-coverage-100%" src="https://user-images.githubusercontent.com/13385801/134093507-474fffdf-d6ea-4d13-aaa6-f4a8d5efa534.png">

---

## Coverage

The Live Server extension is configured (in .vscode/settings.json) to open the the coverage/lcov-report/index.html file in your default browser when you select "Go Live", which should be at the bottom of VS Code if the extension is installed.

Jest uses [Istanbul](https://istanbul.js.org/) to track how well the unit tests test the code. The output from Istanbul looks like this:

![127 0 0 1_5500_](https://user-images.githubusercontent.com/13385801/134093898-82d5d96b-5416-4225-be7c-7c0fca5c8f9d.png)

And a code file output looks like:

![127 0 0 1_5500_functions-01 js html](https://user-images.githubusercontent.com/13385801/134094889-628d1f0e-8229-4455-9ae6-315a12f2a85e.png)

If certain pieces of code are not touched by the unit tests, the Istanbul output will flag the code as not covered.

<img width="455" alt="2021-09-20_20-37-53" src="https://user-images.githubusercontent.com/13385801/134095415-2fea0797-6388-412c-94b6-fafdbc335135.png">

The question then becomes: Is the code logic wrong or is the suite of tests not inclusive enough?

In the above silly example, the code logic is wrong. There is probably no need for that if statement. If there is a need, then a test should be written for it.

---

## Commit and push after all tests pass

---

> "Unit testing ensures that all code meets quality standards before it's deployed."
> [The importance of unit testing](https://fortegrp.com/the-importance-of-unit-testing/)

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

[Setting up ESLint to work with new or proposed JavaScript features such as private class fields.](https://griffa.dev/posts/setting-up-eslint-to-work-with-new-or-proposed-javascript-features-such-as-private-class-fields./#configuring-eslint)
