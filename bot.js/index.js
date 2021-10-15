"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const routes_1 = require("./routes");
const Discord = require("discord.js");
// const Backend = require("./backend");
const _TOKEN = String(process.env.TOKEN);
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
client.on("ready", (msg) => {
    console.log("Bot connected as " + msg.user.tag);
});
/**
 * Responds to messages from channel and direct message
 */
client.on("messageCreate", (msg) => {
    if (!msg.author.bot && msg.content.startsWith("~")) {
        //splits the msg into an array of ['',{help-code},{url}]
        let args = msg.content.split(/[~,\s++]/);
        console.group(args);
        (0, routes_1.route)(msg, args);
        // msg.channel.send(response);
    }
});
client.login(_TOKEN);
