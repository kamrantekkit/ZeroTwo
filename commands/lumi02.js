const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Tuser = "Lumaerix"
    let botembed = new Discord.MessageEmbed()
    .setColor("#ff0fef")
    .setDescription(`Created by ${Tuser}  Thank you Darling for this Art!`)
    .attachFiles(['./Images/02.png'])
    .setImage('attachment://02.png')


    message.channel.send(botembed);
}
module.exports.help = {
  name:"lumi02"
}
