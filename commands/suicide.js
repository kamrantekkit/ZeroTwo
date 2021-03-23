const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/9DjVXGo.gif','https://i.imgur.com/zmqO7rf.gif','https://i.imgur.com/JWckguK.gif','https://i.imgur.com/yV5kfaG.gif','https://i.imgur.com/eZbgq5R.gif')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setColor("#ff0fef")
  .setDescription(`${EUser} committed aliven't`)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"suicide"
}
