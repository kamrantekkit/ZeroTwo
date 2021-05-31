const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  function randomMessage(){
    var randomNumber = Math.round(Math.random()*2.5);
    switch(randomNumber){
        case 0: return 'Hello, Darling!';
        case 1: return 'Darling!';
        case 2: return "Darling, You're back!";
    }
  };
  console.log(message)
        message.channel.send(randomMessage());

}
module.exports.help = {
  name:"hello"
}
