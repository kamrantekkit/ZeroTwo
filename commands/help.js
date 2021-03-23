const Discord = require("discord.js");
const botconfig = require("../config.json");


module.exports.run = async (bot, message, args, data) => {
  let store = []
  await data.forEach(element => store.push(`**${botconfig.prefix}**` + element))
  const half = Math.ceil(store.length / 2);
  data1 = store.splice(0, half)
  data2 = store.splice(-half)
  let datastore = {
    1: data1,
    2: data2
  }
  let page = "1"
  let num = Number(args[0])


  if(isNaN(num)) {
    return embed(datastore[1], page)
  }

  if (typeof num == "number" ) {
    page = num
    let object1 = Object.keys(datastore)
    if(num > object1.length) {
      num = object1[object1.length - 1]
      page = num
    }

    return embed(datastore[num], page)
  }



  function embed(array, page) { 
  let botembed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL())
    .setColor("#ff0fef")
    .addField("Commands", array)
    .setTitle(`Page ${page}/2`);

  message.channel.send(botembed);
}
}

module.exports.help = {
  name: "help"
}
