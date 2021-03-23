const Discord = require("discord.js");
const mongoose = require("mongoose");
const { bulkWrite } = require("../dataModels/serverSchema.js");
const serverinfo = require("../dataModels/serverSchema.js");



module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Insufficent Permissions");

  let guildID = message.guild.id;
  let channel = message.channel;
  let mode = args[0];
  let Tuser;

  try {
    mode = mode.toUpperCase();
  } catch (err) {
    console.log(err)
    let serverembed = new Discord.MessageEmbed()
      .setDescription("Command Usage")
      .setColor("#ff0fef")
      .addField("**+autoreply true/enable**", " To enable autoreply on the server")
      .addField("**+autoreply false/disable**", " To disable autoreply on the server")
      .addField("**+autoreply setup (mentioned user) (reply message)**", "Will add to autoreply list and send reply message when they send a message")
      .addField("**+autoreply remove (mentioned user)**", "To remove user from autoreply")
      .addField("**+autoreply cooldown (seconds)**", "set cooldown timer")

    channel.send(serverembed);
  }

  switch (mode) {
    case mode == "ENABLE" || "TRUE":
      replyEnable(guildID, channel);
      break;
    case mode == "DISABLE" || "FALSE":
      replyDisable(guildID, channel);
      break;
    case "SETUP":
      Tuser = (message.mentions.users.first())
      let replymessage = args;
      replymessage.splice(0, 2)
      replymessage = replymessage.join(" ")
      autoReplySetup(Tuser, replymessage, guildID, channel)
      break;
    case "REMOVE":
      Tuser = (message.mentions.users.first());
      await locateExisting(guildID, Tuser, channel);
      channel.send("User was removed")
      break;
    case "COOLDOWN":
      let cooldownValue = args[1];
      cooldownValue = parseInt(cooldownValue)
      if (isNaN(cooldownValue)) {
        channel.send("Value is not a number, Setting to default Value. 5 seconds")
        cooldownValue = 5;
      }
      cooldownSet(channel, guildID, cooldownValue)
      break;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function autoReplySetup(Tuser, replymessage, guildID, channel) {

  locateExisting(guildID, Tuser);
  await sleep(30)

  serverinfo.findOneAndUpdate({ serverID: guildID }, { $push: { "storage.autoReplyStorage": { userID: Tuser.id, message: replymessage } } }, (err, data) => {
    if (err) {
      console.log
    }
    channel.send(`${Tuser} was added to auto reply`)
  })

}

function locateExisting(guildID, Tuser, message) {
  let ifExist;
  serverinfo.findOne({ serverID: guildID }, (err, data) => {
    if (err) console.log(err);

    try {
      ifExist = data.storage.autoReplyStorage
      let remove = ifExist.find((x) => x.userID == Tuser.id)
      removeUser(guildID, remove.userID, message, Tuser)

    } catch (err) {
    }
  })
}

function removeUser(guildID, remove, channel) {
  serverinfo.findOneAndUpdate({ serverID: guildID }, { $pull: { "storage.autoReplyStorage": { userID: remove } } }, (err, data) => {
    if (err) console.log(err);

  }
  )
}



async function replyEnable(guildID, channel) {
  let doc = await serverinfo.findOne({ serverID: guildID })
  doc.serverSettings.reply = true
  doc.markModified('serverSettings')
  doc.save()
  channel.send(`AutoReply was enabled `)
}

async function replyDisable(guildID, channel) {
  let doc = await serverinfo.findOne({ serverID: guildID })
  doc.serverSettings.reply = false;
  doc.markModified('serverSettings')
  doc.save()
  channel.send("AutoReply has been disabled")
}

async function cooldownSet(channel, guildID, cooldownValue) {
  let convertedCooldown = cooldownValue * 1000;
  let doc = await serverinfo.findOne({ serverID: guildID })
  doc.serverSettings.replyCooldown = convertedCooldown
  doc.markModified('serverSettings')
  doc.save()
  channel.send(`Cooldown was set to ${cooldownValue}`)
}

module.exports.help = {
  name: "autoreply"
}
