const { chromium } = require('@playwright/test');

(async () => {
  // 1. Launch browser in headed mode so you can see it open
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  
  // 2. Open a new isolated browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // 3. Navigate to a live site
  console.log('Navigating to SauceDemo...');
  await page.goto('https://www.saucedemo.com/');

  // 4. Validate the title
  const title = await page.title();
  console.log('Page title is:', title);

  if (title === 'Swag Labs') {
    console.log('TEST PASSED: Title matches expected value.');
  } else {
    console.error('TEST FAILED: Unexpected title.');
  }

  // 5. Clean up and close
  await browser.close();
})();