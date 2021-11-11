require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token  = process.env.DISCORD_TOKEN
const clientId  = process.env.CLIENT_ID
const inviteLink = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=536870911991&scope=bot%20applications.commands`;

// When the client is ready, the virtual user is shown as "Logged in" in the servers.
client.once("ready", function(){
  console.log(`I am ready! Logged in as ${client.user.tag}!`);
  console.log(`Click to invite me: ${inviteLink}`);
});

//Called on guild invite
client.on("guildCreate", function(guild){
  console.log(`I joined the guild: ${guild.name}`);
});

//Called on any message
client.on('messageCreate', message => {
  if(message.content.indexOf("/test") > -1){
    message.reply(`I'm a test and it's working !`)
    .then(() => console.log(`Replied to message successfully`))
    .catch(console.error);
  }
});

// Login to Discord with your client's token
client.login(token);