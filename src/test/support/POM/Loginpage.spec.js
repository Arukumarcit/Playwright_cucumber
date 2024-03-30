
class Loginpage{


    constructor(wrapper){
     this.wrapper=wrapper;
     this.login='#login2';
     this.username='#loginusername';
     this.password='#loginpassword';
      this.loginbtn="//button[@onClick='logIn()']"
    }

    async loginUrl(){

        await this.wrapper.navigateTo("https://www.demoblaze.com/");
    }
    async loginuser(username,password){

        await this.wrapper.click(this.login);
    //    await this.page.locator(this.login).click();
        await this.wrapper.fill(this.username,username);
        await this.wrapper.fill(this.password,password);
       // await this.page.locator(this.username).fill(username);
      //  await this.page.locator(this.password).fill(password);
        await this.wrapper.click(this.loginbtn);
      //  await this.page.locator(this.loginbtn).click();
    }
}
module.exports = { Loginpage };