const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user, Darling.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't do that, Darling.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked, Darling.");

    let banEmbed = new Discord.MessageEmbed()
    .setDescription("~Ban~")
    .setColor("#ff0fef")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
