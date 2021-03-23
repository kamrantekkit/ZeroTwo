const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You can't do that, Darling");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("You can't do that, Darling.");
  let role1 = args.join(" ").slice(22);
  if(!role1) return message.reply("Specify a role!");
  let gRole = message.guild.roles.cache.find(role => role.name === role1);
  if(!gRole) return message.reply("Couldn't find that role, Darling.");

  if(rMember.roles.cache.has(gRole.id)) return message.reply("They already have that role, Darling.");
  await(rMember.roles.add(gRole.id));


  message.channel.send(`<@${rMember.id}>,You have been given the role ${gRole.name}`)
  
}

module.exports.help = {
  name: "addrole"
}
