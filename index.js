import { botKey } from ".env";
import getNextBossText from "./bdo/bossTimer"

const Discord = require('discord.js');
const client = new Discord.Client({partials:["REACTION","MESSAGE"],ws:{ intents: ['GUILDS','GUILD_MESSAGES']}});


woof = async () => {
	const channel = await client.channels.fetch('692003934776328282')
	await channel.send(getNextBossText())
}

client.once('ready', () => {
	woof()
});


client.on("message", msg => {
	if(msg.content === "test"){msg.reply("kutyi")}
})

client.login(botKey);


