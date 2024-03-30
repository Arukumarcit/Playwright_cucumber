const { PlaywrightWrapper } = require('./PlaywrightWrapper');
const { Loginpage } = require('./Loginpage.spec');
const { Homepage } = require('./homepage.spec');

class PomManager {
    constructor() {
        this.wrapper = new PlaywrightWrapper();
        this.loginpage = new Loginpage(this.wrapper);
        this.homepage = new Homepage(this.wrapper); 
    }

    async initializepage() {
        await this.wrapper.initializeBrowser();
   
    }

    async close() {
        await this.wrapper.closeBrowser();
    }

    getloginpage() {
        return this.loginpage;
    }

    gethomepage() {
        return this.homepage;
    }
}

module.exports = { PomManager };
