"use strict";
require('dotenv').config();
var _TOKEN = String(process.env.TOKEN);
var Discord = require("discord.js");
var client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
client.on("ready", function (msg) {
    console.log('ChuggBot Ready! :)' + msg);
    // msg.reply("It works")
});
client.on("message", function (msg) {
    if (msg.startsWith('$')) {
        console.log(msg);
    }
});
client.login(_TOKEN);
