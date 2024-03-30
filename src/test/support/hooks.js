const { Given, When, Then, Before, BeforeStep, AfterStep, Status, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const{PomManager} = require("./POM/PomManager.spec");
const { title } = require('process');



Before(async function(){
  this.pomManager = new PomManager();
  await this.pomManager.initializepage();
  await this.pomManager.wrapper.context.tracing.start(
    {
 
        title:title,
        sources:true,
        screenshots:true,snapshots:true
    }
  )

         })


       AfterStep(async function(){
        try {
            const img=await this.pomManager.wrapper.page.screenshot({path:'test-results/Screenshots/'+Date.now(),
            type:"png",fullPage:true});
            await this.attach(img,"image/png");
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }); 
    After(async function({pickle}) {
   
        const path = `./test-results/trace/${this.pomManager.wrapper.context.tracing.title}.zip`;
    await this.pomManager.wrapper.context.tracing.stop({path:path})
     this.pomManager.close();
      console.log("Automation script completed");
  });
  
  