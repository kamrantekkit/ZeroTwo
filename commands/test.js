const Discord = require("discord.js");
const mongoose = require("mongoose");
const serverinfo = require("../dataModels/serverSchema.js");



module.exports.run = async (bot, message, args) => {
  if (message.author.id !== `317539711067357185`) return message.reply("Your Not Darling.");
  console.log(args)
}

module.exports.help = {
  name: "test"
}
