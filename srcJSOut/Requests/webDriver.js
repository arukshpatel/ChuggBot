"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeTask = exports.initiateWebDriver = void 0;
class WebDriver {
    _isPrivate = false;
    _url;
    get isPrivate() {
        return this._isPrivate;
    }
    set isPrivate(value) {
        this._isPrivate = value;
    }
    get url() {
        if (this._url === undefined) {
            return "";
        }
        return this._url;
    }
    set url(value) {
        this._url = value;
    }
    print() {
        console.log(this);
    }
}
async function initiateWebDriver(details) {
    return new Promise((resolve, reject) => {
        if (details)
            resolve("Initiated");
        reject("Cannot be initiated");
    });
    // if(details.url === undefined || details.url.length <= 3)
    //     const driver = new WebDriver(details);
}
exports.initiateWebDriver = initiateWebDriver;
async function executeTask(details) {
}
exports.executeTask = executeTask;
