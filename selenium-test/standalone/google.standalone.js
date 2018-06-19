var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

browserTest('chrome');
browserTest('firefox');

async function browserTest(browserName) {
    var driver = await new webdriver.Builder()
        .forBrowser(browserName)
        .build();

    try {
        await driver.get('http://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('webdriver');
        await driver.sleep(1000).then(async function () {
            await driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
        });
        await driver.findElement(By.name('btnK')).click();
        await driver.sleep(2000).then(async function () {
            await driver.getTitle().then(async function (title) {
                if (title === 'webdriver - Google Search') {
                    console.log('Test passed');
                } else {
                    console.log('Test failed');
                }
            });
        });
    } finally {
        await driver.quit();
    }
}