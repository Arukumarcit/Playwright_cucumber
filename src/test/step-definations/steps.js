const { test, expect, playwright }= require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test')


Given('Navigate to demoblaze website and login with username {string} and password {string}',{ timeout: 40000 }, async function (username, password) {

    const login = this.pomManager.getloginpage();
    await login.loginUrl();
    await login.loginuser(username,password);

});
When('Search the Samsung mobile model {string}', async function (mobilemodel) {
    this.homepage = this.pomManager.gethomepage();
   await this.homepage.findtheproduct(mobilemodel);
});

Then('Add mobile to cart',{timeout:10000}, async function () {
    console.log("Add mobile to cart");
   await this.homepage.addtocart();
   
});
