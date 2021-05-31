const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.cache.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that Darling.");
  if(!args[0]) return message.channel.send("Darling, specify a number.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
