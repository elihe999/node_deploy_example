#!/usr/bin/env node

const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://192.168.92.48');
  // await page.screenshot({path: 'example.png'});

  await browser.close();
})();
