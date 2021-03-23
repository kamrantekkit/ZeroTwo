const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You can't do that, Baka");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, Darling.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role, Darling");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role, Darling.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`You lost the ${gRole.name} role.`)
  }catch(e){
    message.channel.send(`<@${rMember.id}> removed ${gRole.name} from them.`)
  }
}

module.exports.help = {
  name: "removerole"
}
