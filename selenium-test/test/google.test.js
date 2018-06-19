// SELENIUM WEBDRIVER + JEST

const Webdriver = require('selenium-webdriver'),
    By = Webdriver.By,
    until = Webdriver.until;

let DRIVER;

beforeEach(async () => {
    DRIVER = await new Webdriver.Builder()
        .forBrowser('chrome')
        .build();
});

test('Can access Google', async () => {
    await DRIVER.get('http://www.google.com/ncr');
    await DRIVER.findElement(By.name('q')).sendKeys('Selenium Webdriver');
    await DRIVER.sleep(1000).then(async function () {
        await DRIVER.findElement(By.name('q')).sendKeys(Webdriver.Key.TAB);
    });
    await DRIVER.findElement(By.name('btnK')).click();
    await DRIVER.sleep(2000);
    const title = await DRIVER.getTitle();
    expect(title).toBe('Selenium Webdriver - Google Search');
}, 16000);

afterEach(async () => {
    await DRIVER.quit();
});