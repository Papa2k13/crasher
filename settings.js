 const fs = require("fs");
const chalk = require("chalk")
global.BOT_TOKEN = "8952449916:AAEc50RtemxKTlLRFd6taPER-WTowax1j_0"
global.BOT_NAME = "EMOXX BUG BOT"
global.OWNER_NAME = "https://t.me/emoxinfo"
global.OWNER = ["https://t.me/emoxinfo"]
global.DEVELOPER = ["7055215959"]
global.pp = 'https://files.catbox.moe/1ze4kn.jpg'

global.owner = global.owner = ['7055215959']
const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})