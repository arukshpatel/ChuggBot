"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchURL = void 0;
async function fetchURL(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved");
        }, 7000);
    });
}
exports.fetchURL = fetchURL;
