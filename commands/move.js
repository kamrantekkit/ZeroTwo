const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rMember = message.mentions.members.first();
  if (!rMember) return message.reply("You can't do that, Darling.");
  if (rMember.id === '317539711067357185') return message.reply("Sorry, But i can't let you do that to my Darling.");
  let chan1 = message.guild.channels.cache.find(channel => channel.name === args[2]);
  if (chan1 === undefined) return message.reply("Specify a channel name, Darling.");
  let chan2 = message.guild.channels.cache.find(channel => channel.name === args[3]);
  if (chan2 === undefined) return message.reply("Specify a channel name, Darling.");
  let num = args[1]
  if (isNaN(num)) return message.reply("Specify a value, Darling.");
  if (!num) return message.reply("Specify a value, Darling.");
  if (num > 25) return message.reply("Sorry Darling, Maximum is 25")

  for (i = 0; i < num; i++) {
    await sleep(750)
    await rMember.voice.setChannel(chan1.id)
    await sleep(750)
    await rMember.voice.setChannel(chan2.id)
  }

}
module.exports.help = {
  name: "move"
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}