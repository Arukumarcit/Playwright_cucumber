import { error } from "console";
import { chromium, firefox, webkit } from "@playwright/test";
import './env'; // Load environment variables
import '../types/environment.d'

const launchOptions = {
    headless: false
};

const invokeBrowser = async () => {
  
    const browserType = process.env.BROWSER 

    switch (browserType) {
        case "chrome":
            return await chromium.launch(launchOptions);
        case "firefox":
            return await firefox.launch(launchOptions);
        case "webkit":
            return await webkit.launch(launchOptions);
        default:
            throw new Error("Set the proper browser");
    }
};

export { invokeBrowser };
