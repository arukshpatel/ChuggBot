require('dotenv').config();

const _TOKEN: string = String(process.env.TOKEN);
const Discord = require("discord.js");

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES]
})

client.on("ready", (msg: any) => {
    console.log('ChuggBot logged in as ' + msg.user.tag)
    // msg.reply("It works")
})

client.on("message", (msg: string) => {
    if (msg.startsWith('$')) {
        console.log(msg);
    }
})

client.login(_TOKEN);