require('dotenv').config();
const { Client, Intents } = require('discord.js');
const token  = process.env.DISCORD_TOKEN

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, the virtual user is shown as "Logged in" in the servers.
client.once("ready", function(){
	console.log(`I am ready! Logged in as ${client.user.tag}!`);
});

// Login to Discord with your client's token
client.login(token);

/*
  client.on("...", (...)=>{});
*/