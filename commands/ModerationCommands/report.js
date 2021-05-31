const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(rUser.id === '317539711067357185') return message.reply("Sorry, But i can't let you do that to my Darling.");
    if(!rUser) return message.channel.send("Couldn't find user, Darling");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("Reports")
    .setColor("#ff0fef")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    message.channel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
