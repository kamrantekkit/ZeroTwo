const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL();

    let botembed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username)
    .setDescription("I love honey and My Darling!")
    .setColor("#ff0fef")
    .setThumbnail(bicon)
    .addField("Zero Two", "Created By My Darling, Kamrantekkit")


    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
