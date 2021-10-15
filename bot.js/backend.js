"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchURL = void 0;
require("chromedriver");
const { By, Key, Builder, Capabilities } = require("selenium-webdriver");
async function fetchURL(url) {
    return new Promise(async (resolve, reject) => {
        if (url == undefined) {
            reject("URL is unreadable/undefined");
        }
        try {
            var chromeCapabiities = Capabilities.chrome();
            var chromeOptions = {
                args: [""],
            };
            chromeCapabiities.set("chromeOptions", chromeOptions);
            var driver = await new Builder()
                .forBrowser("chrome")
                .withCapabilities(chromeCapabiities)
                .build();
            console.log(driver.get);
        }
        catch (error) {
            reject("Chrome driver could not be initiated");
        }
        let searchString = "selenium";
        //To wait for browser to build and launch properly
        // let driver = await new Builder().forBrowser("chrome").build();
        //To fetch http://google.com from the browser with our code.
        await driver.get(url);
        //To send a search query by passing the value in searchString.
        // await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
        //Verify the page title and print it
        var title = await driver.getTitle();
        // console.log("Title is:", title);
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
        resolve(title);
    });
}
exports.fetchURL = fetchURL;
