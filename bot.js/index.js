"use strict";
var Discord = require("discord.js");
var client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
function readMSG(msg) {
    console.log(msg);
}
client.on("ready", function () {
    console.log('Loggin in as ${client.user.tag}!');
    // msg.reply("It works")
});
client.on("message", function (msg) {
    readMSG(msg);
});
client.login(String(process.env.TOKEN));
