const autoreply = require(`./messageHandlers/autoReply.js`)

module.exports.run = async (bot, message) => {

    autoreply.run(bot, message)
    
}


