const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array(`https://i.imgur.com/ElBl7Wp.gif`,'https://i.imgur.com/xNOiiPh.gif','https://i.imgur.com/kMk5LYZ.gif','https://i.imgur.com/vxw3kkm.gif','https://i.imgur.com/ApdC2bx.gif',`https://i.imgur.com/4uHabj9.gif`,'https://i.imgur.com/EGAJcDg.gif','https://i.imgur.com/JUddhg7.gif','https://i.imgur.com/HbLt9AU.gif','https://i.imgur.com/Xb4ztDR.gif','https://i.imgur.com/KMf5H0m.gif')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let TUser = message.guild.member(message.mentions.users.first());
  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setColor("#ff0fef")
  .setDescription(`${EUser} headpatted ${TUser} `)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"headpat"
}
