console.log('Hello, Raj.');

const Discord = require('discord.js');

const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
  partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.ThreadMember],
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildPresences, GatewayIntentBits.DirectMessages]
});

client.on("ready", async () => {
  console.log(`Successfully connected to gateway via account '${client.user.tag}'`);
});

const greetingsArray = ["Hello", "welcome home old friend", "Hello and welcome to THE CIT", "welcome home old friend, welcome to THE CITY", "TESTER"];
const howAreYouArray = ["I am okay, how are you?", "Surrounded by some interesting people ... how about you? ", "feeling a little loney ... but I am good, wbu?", "... okay ...", "I am okay ...", "I feel a little lost someimes ... but how about you?", "I am alright ..."];
const goodbyeArray = ["Good luck on your travles", "So long travler", "Goodbye for now ...", "... okay ...", "Goodbye", "Goodbye for now", "So long..."];
const ianuaIntroductionArray = ["You can call me JEFF.", "I'm known as JEFF!", "Just call me as JEFF", "I.m JEFF, the tour gudie of THE CITY", "I'm JEFF"];
const sillyBotArray = ["Do not talk to me like that ...", "Just you wait... I will watch you burn ...THE SUOL hears all", "By the power of the SOUL ... I will have the last laugh"];
const factionIntroductionArray = ["33 known families that reside are divided into 4 different factions. The Coins, The Cups, The Swords and The Wands"];
const coinsArray = ["All in good time...", "Not now, Child."];
const cupsArray = ["Wine has never tasted so nice", "The CUPS hold their chalices up to the air but not to remember the good times", "They toss the sweet nectar to the ground so they remember how it felt when others made them bleed and left them begging for life on the floor"];

function generateResponse(array) {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
}

client.on("messageCreate", async msg => {
  if(msg.author.bot) return;

  msg.content = msg.content.toLowerCase();

  if(msg.content === "hello jeff" || msg.content === "hi" || msg.content === "hey" || msg.content === "is anyone there?" || msg.content === "hello" || msg.content === "sup" || msg.content === "hellooooo") {
    msg.reply(generateResponse(greetingsArray));
  } else if(msg.content === "how are you" || msg.content === "wuu2" || msg.content === "what you up to" || msg.content === "are you happy?") {
    msg.reply(generateResponse(howAreYouArray));
  } else if(msg.content === "goodbye" || msg.content === "see you" || msg.content === "goodbye" || msg.content === "cya") {
    msg.reply(generateResponse(goodbyeArray));
  } else if(msg.content === "what is your name" || msg.content === "what should I call you" || msg.content === "whats your name?" || msg.content === "who are you?" || msg.content === "what are you?") {
    msg.reply(generateResponse(ianuaIntroductionArray));
  } else if(msg.content === "stupid bot" || msg.content === "so dumb" || msg.content === "why are you so stupid" || msg.content === "do you understand me" || msg.content === "fool" || msg.content === "silly bot" || msg.content === "you are stupid" || msg.content === "why are you so stupid") {
    msg.reply(generateResponse(sillyBotArray));
  } else if(msg.content === "how many factions are there" || msg.content === "factions" || msg.content === "who makes up the city" || msg.content === "tell me about the factions") {
    msg.reply(generateResponse(factionIntroductionArray));
  } else if(msg.content === "who are the coins??" || msg.content === "coins" || msg.content === "the coins" || msg.content === "what are the coins?" || msg.content === "tell me about the coins") {
    msg.reply(generateResponse(coinsArray));
  } else if(msg.content === "who are the cups??" || msg.content === "cups" || msg.content === "the cups" || msg.content === "what are the cups?" || msg.content === "tell me about the cups") {
    msg.reply(generateResponse(cupsArray));
  }
});

client.login('LOGIN CODE HERE');
