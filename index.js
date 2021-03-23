const botconfig = require("./config.json");
const tokenfile = require("./token.json");
const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
const Handlers = require(`./Handler/mainHanlder`);
let data = [];
const mongoose = require("mongoose")
const serverinfo = require("./dataModels/serverSchema.js")

mongoose.connect('mongodb://192.168.1.150/zerotwodb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


fs.readdir("./commands/", async (err, files) => {

  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return
  }
  loader(jsfile)




});

async function loader(jsfile) {
  await jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    data.push(props.help.name)
  })
}




bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

  bot.user.setActivity("Anime", { type: "WATCHING" });
  const Guilds = bot.guilds.cache.map(guild => ({ id: guild.id, name: guild.name }));
  Guilds.forEach(temp => setupServerCollection(temp))


});



bot.on("message", async message => {

  setupServerCollection(message.guild);
  Handlers.run(bot, message);

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  if (cmd.substring(0, 1) !== botconfig.prefix) return;
  let prefix = botconfig.prefix;
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) {
    commandfile.run(bot, message, args, data);
    return;
  };






});

function setupServerCollection(guildtemp) {

  serverinfo.findOne({
    serverID: guildtemp.id,
  }, (err, data) => {
    if (err) console.log(err)
    if (!data) {
      const newData = new serverinfo({
        name: guildtemp.name,
        serverID: guildtemp.id,
        serverSettings: {},
        storage: {},
      })
      newData.save({new:true}).catch(err => console.log(err))
    }

  })

}

bot.login(tokenfile.token);


