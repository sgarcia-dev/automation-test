// PUPPETEER + JEST

const puppeteer = require('puppeteer');
let BROWSER, PAGE;

beforeEach(async () => {
    BROWSER = await puppeteer.launch();
    PAGE = await BROWSER.newPage();
});

test('Google search result for Puppeteer should return correct title.', async () => {
    await PAGE.goto('https://www.google.com/ncr');
    await PAGE.type('input[name=q]', 'Puppeteer');
    await PAGE.click('input[value="Google Search"]');
    await PAGE.waitForNavigation();
    await PAGE.screenshot({ path: 'google.test.png' });
    const title = await PAGE.title();
    expect(title).toBe('Puppeteer - Google Search');
});

afterEach(async () => {
    await BROWSER.close();
});