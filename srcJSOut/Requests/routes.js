"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigate = void 0;
const Backend = require("./backend");
const CR = require("../Model/customResponses");
async function Navigate(msg, route, isPrivate, url) {
    switch (route.toLowerCase()) {
        case "chugg":
            msg.reply("Let me look into it").then(Backend.fetchURL(url, isPrivate)
                .then((response) => {
                msg.reply("Let me look into it");
                console.log(response);
            })
                .then((response) => {
                msg.reply("Website title is: " + response);
                console.log(response);
            })
                .catch((reason) => {
                msg.reply("Sorry. There was an error: " + reason);
            }).finally(() => { }));
            break;
        case "medium":
            // TODO
            msg.reply(CR._Todo);
            break;
        case "help-codes":
            msg.reply(CR.HelpCodes);
            break;
        case "help":
        default:
            msg.reply(CR.DefaultResponse);
    }
}
exports.Navigate = Navigate;
