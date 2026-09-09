import { chromium, test } from "@playwright/test";
test("To launch a browser", async () => {
const browser = await chromium.launch();
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.goto("https://leaftaps.com/opentaps/control/login");
  console.log("Browser launched");
});