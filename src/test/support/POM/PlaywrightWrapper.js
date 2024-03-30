const { chromium } = require('playwright');


class PlaywrightWrapper {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async initializeBrowser() {
        console.log("initializeBrowser-----")
        this.browser = await chromium.launch({
           headless:true

        });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async fill(selector, text) {
        await this.page.fill(selector, text);
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }
}

module.exports = { PlaywrightWrapper };
