require("dotenv").config();
import { route } from "./routes";

const Discord = require("discord.js");
// const Backend = require("./backend");
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
    to recieve messages from Channel and DM
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
    if (!msg.author.bot && msg.content.startsWith("~")) {
        //splits the msg into an array of ['',{help-code},{url}]
        let args: string[] = msg.content.split(/[~,\s++]/);
        console.group(args);
        route(msg, args);
        // msg.channel.send(response);
    }
});

client.login(_TOKEN);
