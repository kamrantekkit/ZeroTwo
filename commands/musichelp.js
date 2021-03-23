const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setColor("#ff0fef")
    .addField("Music Commands", `**!play** [url] or [search]\n**!stop** for me to leave the VC\n**!volume** to check volume or [number] to change volume\n**!pause** to pause music\n**!resume** to resume music\n**!queue** to view queue\n**!skip** to skip current song\n**!np** to see whats currently playing` );


    message.channel.send(botembed);
}

module.exports.help = {
  name:"music"
}
