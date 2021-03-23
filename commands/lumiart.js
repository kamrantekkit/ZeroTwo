const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ImageArray = Array('https://i.imgur.com/7HNv8iR.jpg','https://i.imgur.com/xiaBvpw.jpg','https://i.imgur.com/VQtUUJW.png','https://i.imgur.com/Vv3klNx.jpg','https://i.imgur.com/4WAOhz6.png')
  let randomIndex = Math.floor(Math.random() * ImageArray.length);
  let randomImages = ImageArray[randomIndex]

  let botembed = new Discord.RichEmbed()
  .setColor("#ff0fef")
  .addField(`Lumi Art`, `<https://www.deviantart.com/lumaerix/gallery/>`)
  .setImage(randomImages) 

  message.channel.send(botembed);
}

    
module.exports.help = {
  name:"lumiart"
}
