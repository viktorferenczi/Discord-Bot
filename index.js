let environment 				= require('./env');
let blackDesertOnlineHelper 	= require('./bdo/bossTimer');
let channelHelper 				= require('./channels/channelList');
let messageHelper 				= require('./messages/messageList');
let prefix						= "??";

const Discord = require('discord.js');
const client = new Discord.Client(
	{
		partials: ["REACTION","MESSAGE"],
		ws: { 
				intents: ['GUILDS','GUILD_MESSAGES']
			}
	});


// startup, welcome message
client.once('ready', async () => {
	let message = messageHelper.getWelcomeMessage();
	let channel = await channelHelper.getTextChannel(client,'sima-text');
	await channel.send(message);
});

// handle user requests
client.on("message", msg => {
	switch (msg.content) {
		case prefix+"nb":
			msg.reply(blackDesertOnlineHelper.getNextBossText());
			break;
		default:
			break;
	}
});

// login the bot as a client
client.login(environment.getBotPrivateKey());