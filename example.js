
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/snap/bin/chromium",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://192.168.92.48');
  // await page.screenshot({path: 'example.png'});

  await browser.close();
})();
