# WebdriverIO Test

Tests done using [WebdriverIO](http://webdriver.io/guide.html). Since WebdriverIO supports tests via it's integrated test suite (supports Mocha, Jasmine and Cucumber) as well as in standalone (supports all testing frameworks), tests were made in both modes for comparison.

* Tests that run via the WebdriverIO test runner are located in `test/**/*.js`. 
* Tests that use [Jest](https://facebook.github.io/jest/) and run via WebdriverIO standalone mode are located in `jest/**/*.js`.

### How to run tests via the WebdriverIO integrated test runner (Mocha)

* Run `npm install`
* Run `npm run start-selenium`
* Run `npm test`

### How to run tests in WebdriverIO standalone version (Jest)

* Run `npm install`
* Run `npm run start-selenium`
* Run `npm run test-jest`

### Notes/ToDo

* I was not able to get WebdriverIO to start selenium server automatically (in hopes of eliminating `selenium-server-standalone-3.5.3.jar` dependency), despite it being somewhat [officially supported](http://webdriver.io/guide/services/selenium-standalone.html), meaning we need to start the selenium server manually via `npm run start-selenium` before running our WebdriverIO tests.
* I was not able to figure out how to download and load chrome and firefox drivers dynamically (in hopes of eliminating `chromedriver` and `geckodriver` dependency)