const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Darling = message.guild.member(message.mentions.users.first())
  if (Darling.id === '317539711067357185') return message.reply("Sorry, But i can't let you do that to my Darling.");
  let gRole = await message.member.roles.cache.has(weebRole)
  if(gRole) return message.reply("Can't let you do that, Darling");
  let rMember = message.mentions.users.first();
  if (!rMember) return message.reply("You can't do that, Darling.");
  let num = args.join(" ").slice(22);
  if (!num) return message.reply("Specify a value, Darling.");
  if (num > 25) return message.reply("Sorry Darling, Maximum is 25")
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  for (i = 0; i < num; i++) {
    message.channel.send(String(rMember));
    await sleep(5000);
  }
}

module.exports.help = {
  name: "ping"
}