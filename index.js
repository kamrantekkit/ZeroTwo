const Handlers = require(`./Handler/mainHanlder`);
const Discord = require('discord.js');
const glob = require("glob")
const mongoose = require("mongoose")
const serverinfo = require("./dataModels/serverSchema.js")

let data = [];
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
const botconfig = require("./config.json");
const tokenfile = require("./token.json");


mongoose.connect('mongodb://192.168.1.150/zerotwodb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


glob("./commands/**/*.js", function (er, files) {
  let jsfile = files
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return
  }


  loader(jsfile)
})


async function loader(jsfile) {
  await jsfile.forEach((f, i) => {
    let props = require(f);
    bot.commands.set(props.help.name, props);
    if (!props.help.devOnly) {
    console.log(props.help.name + " Has loaded")
    data.push(props.help.name)
    }
  })
}


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


