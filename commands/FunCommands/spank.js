const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/xVeUtl9.gif','https://i.imgur.com/SeM7fJj.gif','https://i.imgur.com/82qdPnr.gif','https://i.imgur.com/wI5UGSU.gif','https://i.imgur.com/GDfeaLD.gif','https://i.imgur.com/R8hYWkm.gif')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let TUser = message.guild.member(message.mentions.users.first());
  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setColor("#ff0fef")
  .setDescription(`${EUser} has spanked ${TUser}`)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"spank"
}
