"use strict";
require("dotenv").config();
var _TOKEN = String(process.env.TOKEN);
var Discord = require("discord.js");
var client = new Discord.Client({
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
client.on("ready", function (msg) {
    console.log("ChuggBot logged in as " + msg.user.tag);
});
client.on("messageCreate", function (msg) {
    console.log(msg);
    //FIXME
    msg.reply("At the moment, I cannot do anything. Please mix me");
});
client.login(_TOKEN);
