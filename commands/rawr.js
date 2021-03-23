const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Rawr**`, {files: ["./images/rawr.gif"]});

}
module.exports.help = {
  name:"rawr"
}
