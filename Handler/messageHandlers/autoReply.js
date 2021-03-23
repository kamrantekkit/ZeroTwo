const Discord = require("discord.js");
const mongoose = require("mongoose");
const serverinfo = require("../../dataModels/serverSchema");
const talkedRecently = new Set();

module.exports.run = async (bot, message) => {
  serverinfo.findOne({ serverID: message.guild.id }, (err, data) => {
    if (err) console.log(err);
    let Cooldown = data.serverSettings.replyCooldown;
    console.log(Cooldown)

    try {
      if (data.serverSettings.reply === true && !talkedRecently.has(message.author.id)) {
        let replyArray = data.storage.autoReplyStorage
        let user = replyArray.find((x) => x.userID == message.author.id)
        message.reply(user.message)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, Cooldown);
      }

    } catch (err) {
    }


  })
}