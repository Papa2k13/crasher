global.public = true

global.AI_KEY = "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"
global.AI_MODEL = "gpt-4o-mini"

global.ownernomer = "918920266221"
global.dev = ["918920266221","918920266221"]
global.ownername = "EMOXX BUG BOT"
global.ytname = "EMOXX BUG BOT"
global.socialm = "GitHub: DGXeon"
global.location = "Egypt, cairo, shopra"

global.ownernumber = '94704703791'
global.ownername = 'EMOXX BUG BOT'
global.botname = 'EMOXX BUG BOT'
global.devname = 'EMOXX BUG BOT'
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'EMOXX BUG BOT\n\nContact: 918920266221'
global.themeemoji = '🪀'
global.wm = "EMOXX BUG BOT."
global.link = 'https://whatsapp.com/channel/0029VbCCnP5CxoAtT7uiXH0D'
global.idch = '120363420097356422@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

global.groupOnlyMsg = '❌ This command can only be used in groups'
module.exports = {
    banner: [
        "918920266221@s.whatsapp.net",
        "20@s.whatsapp.net",
        "918920266221@s.whatsapp.net",
        "20@s.whatsapp.net",
        "20@s.whatsapp.net",
        "20@s.whatsapp.net"
    ]
};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})