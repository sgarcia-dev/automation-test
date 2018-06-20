// require("env2")(".env"); // optionally store your Evironment Variables in .env
const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const path = require("path");

const PATH = {
    tests: path.resolve("./test"),
    reports: path.resolve("./reports"),
    screenshots: path.resolve("./screenshots")
}

const BASE_ENV = {
    "screenshots": {
        "enabled": true,
        "path": PATH.screenshots
    },
    "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
    }
}

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
    "src_folders": [
        PATH.tests
    ],
    "output_folder": PATH.reports,
    "selenium": {
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": seleniumServer.path,
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": chromedriver.path,
            "webdriver.firefox.driver": geckodriver.path
        }
    },
    // Test Environments, can be passed to nightwatch CLI via the -e <ENV_NAME>
    "test_settings": {
        "default": Object.assign(BASE_ENV, {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // turn off to test progressive enhancement
            }
        }),
        "chrome_grid": Object.assign(BASE_ENV, {
            "selenium_port": 4444,
            "selenium_host": "10.38.101.211",
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "args": ["--no-sandbox", "disable-web-security"]
                }
            }
        })
    }
}

module.exports.PATH = PATH;