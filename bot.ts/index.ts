const Discord = require("discord.js")

const client = Discord.Client()

function readMSG(msg: string) {
    console.log(msg);
    /*
    conso
    */
}

client.on("ready", (msg: any) => {
    console.log('Loggin in as ${client.user.tag}!')
    msg.reply("It works")
})

client.on("message", (msg: any) => {
    readMSG(msg);
})


client.login(process.env.TOKEN)