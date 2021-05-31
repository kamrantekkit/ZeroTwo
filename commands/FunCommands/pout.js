const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/JaTQZPd.gif','https://i.imgur.com/aMkQd9O.gif','https://i.imgur.com/fyrJKH6.gif','https://i.imgur.com/RDSIihe.gif','https://i.imgur.com/pohKGMB.gif','https://i.imgur.com/5SLkFTg.gif','https://i.imgur.com/MrxYydI.gif','https://i.imgur.com/SQKyDv7.gif','https://i.imgur.com/rfWRUZo.gif','https://i.imgur.com/yt2eFUj.gif','https://i.imgur.com/ahJkPYk.gif','https://i.imgur.com/ZjGCaTW.gif','https://i.imgur.com/nTfeQK9.gif','https://i.imgur.com/wnfSFgc.gif','https://i.imgur.com/dFgmn8R.gif','https://i.imgur.com/sWsL2xw.gif','https://i.imgur.com/ueJzbAR.gif','https://i.imgur.com/5SLkFTg.gif','https://i.imgur.com/pohKGMB.gif','https://i.imgur.com/RDSIihe.gif','https://i.imgur.com/fyrJKH6.gif','https://i.imgur.com/aMkQd9O.gif','https://i.imgur.com/JaTQZPd.gif')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let EUser = message.author

  let botembed = new Discord.MessageEmbed()
  .setColor("#ff0fef")
  .setDescription(`${EUser} pouts`)
  .setImage(randomImages) 

  message.channel.send(botembed);

  console.log("this is running")
}

    
module.exports.help = {
  name:"pout"
}
