import{test,expect} from '@playwright/test'
const {PomManager}= require('./PomManager.spec');
import * as fs from 'fs';
const PropertiesReader = require('properties-reader');
require('dotenv').config();

test('POM Loginpage',async ({page})=>{
//JSON  data
    const data=fs.readFileSync('tests/testdata/logindata.json');
     const jsondata=JSON.parse(data);
    console.log('Username is-->',jsondata.username);
//Property file
  //  const propertyreader=PropertiesReader('tests/testdata/config.properties')
   // const username=propertyreader.get('username')
   //  console.log('Prop Username is-->',username);
// env

//const envusername=process.env.USERNAME1
//console.log(process.env);
//console.log('Env Username is-->',envusername);

const pomManager = new PomManager();
await pomManager.initializepage();
const login = pomManager.getloginpage();
await login.loginUrl();
await login.loginuser(jsondata.username,jsondata.password);
const homepage= pomManager.gethomepage();
homepage.findtheproduct('Samsung galaxy s6');
await page.waitForTimeout(5000);
homepage.addtocart();

})