const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
    .setDescription("Server Information")
    .setColor("#ff0fef")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server ID", message.guild.id)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
