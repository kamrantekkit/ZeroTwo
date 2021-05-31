const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/Hm2F8WL.gif','https://i.imgur.com/aUQO2jD.gif','https://i.imgur.com/ROgNuGB.gif','https://i.imgur.com/9pX1Ytq.gif','https://i.imgur.com/lFsIoFM.gif','https://i.imgur.com/NfcICRN.gif','https://i.imgur.com/fAFtH4E.gif','https://i.imgur.com/HJU5AY4.gif','https://i.imgur.com/1HmJMu2.gif','https://i.imgur.com/gt9p7LC.gif','https://i.imgur.com/AEUCqu4.gif')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let TUser = message.guild.member(message.mentions.users.first());
  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setColor("#ff0fef")
  .setDescription(`${EUser} has shot ${TUser}`)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"shoot"
}
