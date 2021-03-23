const mongoose = require("mongoose")

const serverSchema = mongoose.Schema({
    name: String,
    serverID: String,
    serverSettings: {},
    storage: {},
}, {minimize: false, strict: false})

module.exports = mongoose.model("serverinfo", serverSchema);