require("dotenv").config();

const _TOKEN: string = String(process.env.TOKEN);
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

client.on("ready", (msg: any) => {
    console.log("ChuggBot logged in as " + msg.user.tag);
});

client.on("messageCreate", (msg: any) => {
    console.log(msg);

    //FIXME
    msg.reply("At the moment, I cannot do anything. Please mix me");
});

client.login(_TOKEN);
