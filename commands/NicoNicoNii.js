const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let RandomArray = Array('Nickel Copper Nickel Copper Nickel Iodine','Nico Nico Nii')
  let randomIndex = Math.floor(Math.random() * RandomArray.length);
  let Text = RandomArray[randomIndex]

  let botembed = new Discord.MessageEmbed()
  .setDescription(Text)
  .setImage('https://i.imgur.com/fCHIzjc.gif') 
  .setColor("#ff0fef")

  message.channel.send(botembed);

}
module.exports.help = {
  name:"nico"
}
