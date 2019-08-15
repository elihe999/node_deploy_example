
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/opt/google/chrome/chrome",
    // executablePath: "/usr/bin/chromium-browser",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://192.168.92.48');
  await page.waitFor(5000)
  await page.type(
          "#control-pad > div:nth-child(1) > div.content > input", "admin"
  )
  await page.type(
          "#control-pad > div:nth-child(2) > div.content > input", "123456"
  )
  await page.click('button[class="gwt-Button"]')
  //.gwt-ListBox // language
  await page.waitFor(2000)
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();
