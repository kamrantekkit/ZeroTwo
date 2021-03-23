const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/qqyjo2h.gif', 'https://i.imgur.com/C7zfGw3.gif', 'https://i.imgur.com/YRMZjD8.gif', 'https://i.imgur.com/j2EffxB.gif', 'https://i.imgur.com/9sBehG0.gif','https://i.imgur.com/vN8OjEw.gif','https://i.imgur.com/FBmVFK2.gif','https://i.imgur.com/7oC2dTL.gif','https://i.imgur.com/iW67DB1.gif','https://i.imgur.com/tRR9GRe.gif','https://i.imgur.com/wSDdFrQ.gif','https://i.imgur.com/kFhpTkg.gif','https://i.imgur.com/cQBEd14.gif','https://i.imgur.com/2NFKeiK.gif')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let TUser = message.guild.member(message.mentions.users.first());
  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setColor("#ff0fef")
  .setDescription(`${EUser} has slapped ${TUser}`)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"slap"
}
