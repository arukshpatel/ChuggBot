const Backend = require("./backend");
const CR = require("../Model/customResponses");

export async function Navigate(
    msg: any,
    route: string,
    isPrivate: boolean,
    url: string
)
{
    switch(route.toLowerCase()) {
    case "chugg":
        msg.reply("Let me look into it").then(
            Backend.fetchURL(url, isPrivate)
                   .then((response: any): void => {
                       msg.reply("Let me look into it");
                       console.log(response);
                   })
                   .then((response: any): void => {
                       msg.reply("Website title is: " + response);
                       console.log(response);
                   })
                   .catch((reason: any): void => {
                       msg.reply("Sorry. There was an error: " + reason);
                   }).finally((): void => {}));
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
