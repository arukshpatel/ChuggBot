"use strict";
var Discord = require("discord.js");
var client = Discord.Client();

client.on("ready", function (msg) {
    console.log('Loggin in as ${client.user.tag}!');
    msg.reply("It works");
});
