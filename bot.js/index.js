"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const backend_1 = require("./backend");
const _TOKEN = String(process.env.TOKEN);
const Discord = require("discord.js");
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
client.on("ready", (msg) => {
    console.log("ChuggBot logged in as " + msg.user.tag);
});
/**
 * Responds to messages from channel and direct message
 */
client.on("messageCreate", async (msg) => {
    if (!msg.author.bot && msg.content.startsWith("~")) {
        //splits the msg into an array of ['',{help-code},{url}]
        let msg_parsed = msg.content.split(/[~,\s++]/);
        let response = await (0, backend_1.fetchURL)(msg_parsed[2]);
        msg.reply("Let me look into it");
        msg.reply(response);
        // msg.channel.send(response);
    }
});
client.login(_TOKEN);
