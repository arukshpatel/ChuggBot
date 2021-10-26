require("dotenv").config();

const Routes = require("./Requests/routes");
const CR = require("./Model/customResponses");

const Discord = require("discord.js");

const _TOKEN: string = String(process.env.TOKEN);

const client = new Discord.Client({
    /*
     Intents 'GUILDS' is required
     if you wish to receive (message) events
     from guilds as well.
     */
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],

    /*
     You have to include partials
     to receive messages from Channel and DM
     */
    partials: ["MESSAGE", "CHANNEL"],
});

/**
 * Shows the connection was successful with discord.
 */
client.on("ready", (msg: any) => {
    console.log("Bot connected as " + msg.user.tag);
});

/**
 * Responds to messages from channel and direct message
 */
client.on("messageCreate", (msg: any) => {
    if(!msg.author.bot && msg.content.startsWith("~")) {
        //splits the msg into an array of ['',{help-code},{url}]
        let args: string = msg.content.split(/[~,\s++]/);

        let routing: string = args[1];
        let url: string;
        let isPrivate: boolean = false;

        if(args.length === 4) {
            url = args[1];

            if(args[2] === "private") {
                isPrivate = true;
            }
            Routes.Navigate(msg, routing, isPrivate, url);
        } else if(args.length === 3) {
            url = args[2];

            Routes.Navigate(msg, routing, isPrivate, url);
        } else {
            msg.reply(CR.DefaultResponse + "\n" + CR.HelpCodes);
        }
        // let route: string = args[1];
        // let isPrivate: boolean = false;
        // let url: string = args[2];

        // route(msg, args[1], false, args[2]);
    }
});

client.login(_TOKEN);
