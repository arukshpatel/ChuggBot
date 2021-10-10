const Discord = require("discord.js")

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.DIRECT_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGES]
})

function readMSG(msg: string) {
    console.log(msg);
}

client.on("ready", () => {
    console.log('Loggin in as ${client.user.tag}!')
    // msg.reply("It works")
})

client.on("message", (msg: any) => {
    readMSG(msg);
})

client.login(String(process.env.TOKEN))