const puppeteer = require("puppeteer");

describe("Button Click Test", () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://0.0.0.0:3000");
  });

  afterAll(async () => {
    await browser.close();
  });

  test("should change text when button is clicked", async () => {
    await page.click("button");
    const text = await page.$eval("#displayText", (el) => el.textContent);
    expect(text).toBe("Hello, Node.js!");
  });
});

