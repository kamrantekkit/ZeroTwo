const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/jXDPr9h.jpg','https://i.imgur.com/Zg0o52v.jpg','https://i.imgur.com/G2giNNx.jpg','https://i.imgur.com/E7gZChu.png','https://i.imgur.com/v0Ra14S.jpg','https://i.imgur.com/qv1OChi.png','https://i.imgur.com/c5ryQ9H.png','https://i.imgur.com/yjwQmAt.jpg','https://i.imgur.com/X8lRjyo.jpg','https://i.imgur.com/RiIiX0k.jpg')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let TUser = message.guild.member(message.mentions.users.first());
  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setDescription(`Darling! Its me!`)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"zerotwo"
}
