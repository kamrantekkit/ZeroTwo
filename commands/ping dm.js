const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  weebRole = "Weeb"
  let Darling = message.guild.member(message.mentions.users.first())
  if(Darling.id === '317539711067357185') return message.reply("Sorry, But i can't let you do that to my Darling.");
  let gRole = await message.member.roles.cache.has(weebRole)
  if(gRole) return message.reply("Can't let you do that, Darling");
  let rMember = message.guild.member(message.mentions.users.first());
  if(!rMember) return message.reply("You can't do that, Darling.");
  let num = args.join(" ").slice(22);
  if(!num) return message.reply("Specify a value, Darling.");
  if(num > 10) return message.reply("Sorry Darling, Maximum is 10")
  for (i = 0; i < num; i++) {
    rMember.send(`RAWR`)
    await sleep(3000)
 }
}
module.exports.help = {
  name: "pingdm"
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}