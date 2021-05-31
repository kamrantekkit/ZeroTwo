const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let messageArray = Array('I love you, Darling!','Darling, I already knew you love me','I love you too!')
  let randomIndex = Math.floor(Math.random() * messageArray.length);
  let randomMessages = messageArray[randomIndex]

        message.channel.send(randomMessages);

}
module.exports.help = {
  name:"ilove02"
}
