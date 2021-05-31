const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Darling = message.guild.member(message.mentions.users.first())
  if(Darling.id === '317539711067357185') return message.reply("Sorry, But i can't let you do that to my Darling.");
  let rMember = message.guild.member(message.mentions.users.first());
  if (!rMember) return message.reply("You can't do that, Darling.");
  let sentence = args.join(" ").slice(22);
  if (!sentence) return message.reply("Darling you forgotten to add what you want to say.");
  
  try {
    rMember.send(`${sentence}`)
  }
  catch (err) {
    message.channel.send(`I was not able to send the message, darling.`)
    console.log(err)
  }

  }
  module.exports.help = {
    name: "dm"
  }