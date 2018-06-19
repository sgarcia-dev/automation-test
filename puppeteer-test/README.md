# Puppeteer Test

Tests are done using [Puppeteer](https://github.com/GoogleChrome/puppeteer), a Chrome-only automation framework created and mantained by the Official Chrome Team. Tests located in `test/**/*.js`. Tests are in [Jest](https://facebook.github.io/jest/), and run in [Chrome Headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome) by default. You can change this by passing `headless: false` to `puppeteer.launch` options ([more info](https://github.com/GoogleChrome/puppeteer/blob/v1.5.0/docs/api.md#puppeteerlaunchoptions)).

### How to run

* Run `npm install`
* Run `npm test`