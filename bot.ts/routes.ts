import Backend = require("./backend");
import _CR = require("./customResponses");

export function route(msg: any, args: string[]) {
    switch (args[1].toLowerCase()) {
        case "chugg":
            Backend.fetchURL(args[2])
                .then((response) => {
                    msg.reply("Let me look into it");
                    console.log(response);
                })
                .then(function (response) {
                    var getResponse = response;
                    msg.reply("Website title is: " + getResponse);
                    console.log(response);
                })
                .catch((reason: any) => {
                    msg.reply("Sorry. There was an error: " + reason);
                });
            break;
        case "medium":
            // TODO
            msg.reply(_CR._Todo);
            break;
        case "help":
        case "help-code":
        case "help-codes":
            msg.reply(_CR.helpCodes);
            break;
        default:
            msg.reply(_CR.defaultResponse);
    }
}
