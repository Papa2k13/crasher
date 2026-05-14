process.on('uncaughtException', console.error)
require("./settings")
global.mode = global.mode || 'public';
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const {toFirstCase,
        isNumber,
        formatp,
        parseMention, 
        resize, 
        getRandom,
        generateProfilePicture, 
        getCase, 
        runtime, 
        FileSize, 
        h2k, 
        makeid, 
        kyun, 
        randomNomor, 
        jsonformat, 
        isUrl,
        fetchJson, 
        sleep,
        getBuffer
        } = require("./lib/myfunc2");
        const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')
const axios = require('axios');
const path = require('path')
const cooldowns = new Map();
const {
    simple
} = require('./lib/myfunc')

 function loadJSON(file) {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify([]))
    return JSON.parse(fs.readFileSync(file))
}
function saveJSON(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

const dbDir = './TeleGram_DataBase'
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir)

const OWNER_NAME = "𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔";

const ownerFile = './TeleGram_DataBase/owner.json'
const premFile  = './TeleGram_DataBase/premium.json'
const devFile   = './TeleGram_DataBase/devolper.json'

let OWNER     = loadJSON(ownerFile)
let PREMIUM   = loadJSON(premFile)
let DEVELOPER = loadJSON(devFile)

global.DEVELOPER = DEVELOPER

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    try {
    const msg = XeonBotInc.message || {};
        const body =
    XeonBotInc.message?.text ||
    XeonBotInc.message?.caption ||
    '';

        const budy =
    (typeof XeonBotInc.message?.text === 'string'
        ? XeonBotInc.message.text
        : '');
        
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)        
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const sender =
    XeonBotInc.message?.from ||
    XeonBotInc.callbackQuery?.from;

        if (!sender) return; // extra safety

const user = simple.getUserName(sender);
const pushname = user.full_name;

const userId = sender.id.toString();
const user_id = userId + ' ';

const isDeveloper = DEVELOPER.includes(userId)
const isOwner = isDeveloper || OWNER.includes(userId)
const isPremium = isOwner || PREMIUM.includes(userId)

const username = sender.username || "Sexyxeon13";
const from = XeonBotInc.chat?.id;
const prefix = isCmd ? body[0] : ''
        const command = XeonBotInc.callbackQuery
    ? XeonBotInc.callbackQuery.data
    : (isCmd
        ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        : '');
        const isGroup = XeonBotInc.chat.type.includes('group')
        const groupName = isGroup ? XeonBotInc.chat.title : ''

const isImage = msg.hasOwnProperty('photo')
const isVideo = msg.hasOwnProperty('video')
const isAudio = msg.hasOwnProperty('audio')
const isSticker = msg.hasOwnProperty('sticker')
const isContact = msg.hasOwnProperty('contact')
const isLocation = msg.hasOwnProperty('location')
const isDocument = msg.hasOwnProperty('document')
const isAnimation = msg.hasOwnProperty('animation')
const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation

const quotedMessage = msg.reply_to_message || {}
const isQuotedImage = quotedMessage.hasOwnProperty('photo')
const isQuotedVideo = quotedMessage.hasOwnProperty('video')
const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
const isQuotedContact = quotedMessage.hasOwnProperty('contact')
const isQuotedLocation = quotedMessage.hasOwnProperty('location')
const isQuotedDocument = quotedMessage.hasOwnProperty('document')
const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
const isQuoted = msg.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) {
                return await XeonBotInc.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'
        if (XeonBotInc.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', from))
        }
        
 const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

if (!XeonBotInc.callbackQuery) {
    if (global.mode === 'self' && !isPremium && isCmd) return;
}
       
switch (command) {

case 'menu':
case 'back': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔────────────────────╗
┃🤖 𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🦠
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚────────────────────╝
`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨', callback_data: 'allmenulist' },
                    { text: '𝗕𝗧𝗡 𝗠𝗘𝗡𝗨', callback_data: 'btnmenu' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url:'https://t.me/LG_BAHIRAVA' }
                ]
            ]
        }
    }
);
}
break

case 'allmenulist': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔═════════════════╗
┃🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🦠
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚═════════════════╝

╔═════════════════╗
║ 📲 PAIR / RENT MENU
╠═════════════════╣
║ ➤ /reqpair
║ ➤ /delpair
║ ➤ /listpair
║ ➤ /clearpair
╚═════════════════╝

╔═════════════════╗
║ 👑 OWNER MENU
╠═════════════════╣
║ ➤ /addowner
║ ➤ /delowner
║ ➤ /listowner
║ ➤ /clearowner
╚═════════════════╝

╔═════════════════╗
║ 💎 PREMIUM MENU
╠═════════════════╣
║ ➤ /addprem
║ ➤ /delprem
║ ➤ /listprem
║ ➤ /clearprem
╚═════════════════╝

╔═════════════════╗
║ 👨‍💻 DEVELOPER MENU
╠═════════════════╣
║ ➤ /adddevolper
║ ➤ /deldevolper
║ ➤ /listdevolper
║ ➤ /cleardevolper
║ ➤ /clearall
╚═════════════════╝

╔═════════════════╗
║ ⚙️ BOT CONTROL
╠═════════════════╣
║ ➤ /mystatus
║ ➤ /runtime
║ ➤ /public
║ ➤ /self
╚═════════════════╝
`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗕𝗧𝗡 𝗠𝗘𝗡𝗨', callback_data: 'btnmenu' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url: 'https://t.me/LG_BAHIRAVA' }
                ]
            ]
        }
    }
);
}
break
  
case 'btnmenu': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔────────────────────╗
┃🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🦄
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚────────────────────╝
`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗣𝗔𝗜𝗥 𝗠𝗘𝗡𝗨', callback_data: 'reqpair_btn' },
                    { text: '𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'owner_btn' }
                ],
                [
                    { text: '𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗠𝗘𝗡𝗨', callback_data: 'prem_btn' },
                    { text: '𝗗𝗘𝗩𝗜𝗟𝗣𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'dev_btn' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url: 'https://t.me/LG_BAHIRAVA' }
                ]
            ]
        }
    }
);
}
break

case 'reqpair_btn': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔────────────────────╗
┃🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🦠
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚────────────────────╝
╔────────────────────╗
┃ /reqpair
┃ /delpair
┃ /listpair
┃ /clearpair
╚────────────────────╝`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗥𝗘𝗧𝗨𝗥𝗡 𝗠𝗘𝗡𝗨', callback_data: 'back' },
                    { text: '𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'owner_btn' }
                ],
                [
                    { text: '𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗠𝗘𝗡𝗨', callback_data: 'prem_btn' },
                    { text: '𝗗𝗘𝗩𝗢𝗟𝗣𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'dev_btn' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url: 'https://t.me/LG_BAHIRAVA' }
                ],
            ]
        }
    }
);
}
break

case 'owner_btn': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔────────────────────╗
┃🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🦠
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚────────────────────╝
╔────────────────────╗
┃ /addowner
┃ /delowner
┃ /listowner
┃ /clearowner
╚────────────────────╝`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗥𝗘𝗧𝗨𝗥𝗡 𝗠𝗘𝗡𝗨', callback_data: 'back' },
                    { text: '𝗣𝗔𝗜𝗥 𝗠𝗘𝗡𝗨', callback_data: 'reqpair_btn' },
                ],
                [
                    { text: '𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗠𝗘𝗡𝗨', callback_data: 'prem_btn' },
                    { text: '𝗗𝗘𝗩𝗢𝗟𝗣𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'dev_btn' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url: 'https://t.me/LG_BAHIRAVA' }
                ]
            ]
        }
    }
);
}
break                   


case 'prem_btn': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔────────────────────╗
┃🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🟡
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚────────────────────╝
╔────────────────────╗
┃ /addprem
┃ /delprem
┃ /listprem
┃ /clearprem
╚────────────────────╝`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗥𝗘𝗧𝗨𝗥𝗡 𝗠𝗘𝗡𝗨', callback_data: 'back' },
                    { text: '𝗣𝗔𝗜𝗥 𝗠𝗘𝗡𝗨', callback_data: 'reqpair_btn' },
                ],
                [
                    { text: '𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'owner_btn' },
                    { text: '𝗗𝗘𝗩𝗢𝗟𝗣𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'dev_btn' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url: 'https://t.me/LG_BAHIRAVA' }
                ]
            ]
        }
    }
);
}
break

case 'dev_btn': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const menuText =
`𝗛𝗶 ${pushname} 👋
╔────────────────────╗
┃🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗫𝗕𝗨𝗚 𝗕𝗢𝗧🦠
┃👑 Owner: ${OWNER_NAME}
┃⚙️ Mode: ${global.mode}
┃💾 RAM: ${formatSize(usedMem)} / ${formatSize(totalMem)}
╚────────────────────╝
╔────────────────────╗
┃ /adddevolper
┃ /deldevolper
┃ /listdevolper
┃ /cleardevolper
╚────────────────────╝
╔────────────────────╗
┃ /clearall
┃ /public
┃ /public
╚────────────────────╝`;

await bot.telegram.sendPhoto(
    XeonBotInc.chat.id,
    global.pp,
    {
        caption: menuText,
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: '𝗥𝗘𝗧𝗨𝗥𝗡 𝗠𝗘𝗡𝗨', callback_data: 'back' },
                    { text: '𝗣𝗔𝗜𝗥 𝗠𝗘𝗡𝗨', callback_data: 'reqpair_btn' },
                ],
                [
                    { text: '𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨', callback_data: 'owner_btn' },
                    { text: '𝗣𝗥𝗘𝗠𝗨𝗠 𝗠𝗘𝗡𝗨', callback_data: 'prem_btn' }
                ],
                [
                    { text: '𝗚𝗥𝗢𝗨𝗣', url: 'https://t.me/BAHIRAVA_GROUP_1' },
                    { text: '𝗖𝗛𝗔𝗡𝗡𝗘𝗟', url: 'https://t.me/BAHIRAVA_CHANNEL2' },
                    { text: '𝗢𝗪𝗡𝗘𝗥', url: 'https://t.me/LG_BAHIRAVA' }
                ]
            ]
        }
    }
);
}
break

case 'reqpair': {
    const libphonenumber = require('libphonenumber-js');
    const userID = sender.id.toString();
    const escapeMarkdownV2 = (text) => {
        return text.replace(/[_*[\]()~`>#\+\-=|{}.!]/g, '\\$&'); 
    };

    const escapedUserID = escapeMarkdownV2(userID);
    const freeStorage = os.freemem() / (1024 * 1024);
    const totalStorage = os.totalmem() / (1024 * 1024);
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024);

    if (freeStorage < 300 || freeDiskSpace < 300) {
        return XeonBotInc.reply('Slot is full, please try again later.');
    }

    if (!isDeveloper) {
        if (cooldowns.has(userID)) {
            const lastUsed = cooldowns.get(userID);
            const now = Date.now();
            const timeLeft = 30000 - (now - lastUsed);

            if (timeLeft > 0) {
                return XeonBotInc.reply(`Please wait ${Math.ceil(timeLeft / 1000)} seconds before using the command again.`);
            }
        }
    }

    if (!text) {
        return XeonBotInc.reply('Please provide a number for requesting the pair code. Usage: /reqpair <number>');
    }

    const sanitizedNumber = text.replace(/\D/g, '');
    function isValidWhatsAppNumber(phone) {
        try {
            const number = libphonenumber.parsePhoneNumber('+' + phone);

            if (!number || !number.isValid()) {
                return false;
            }
            const localNumberLength = number.nationalNumber.length;
            return localNumberLength >= 6 && localNumberLength <= 15;
        } catch (error) {
            return false;
        }
    }

    if (!isValidWhatsAppNumber(sanitizedNumber)) {
        return XeonBotInc.reply('Invalid WhatsApp number. Please enter a valid phone number.');
    }
    const Xreturn = XeonBotInc.message?.reply_to_message ? XeonBotInc.message?.reply_to_message.from.id 
        : sanitizedNumber + "@s.whatsapp.net";
    
    var contactInfo = Xreturn;

    if (contactInfo.length == 0) {
        return XeonBotInc.reply("The number is not registered on WhatsApp.");
    }
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);

    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);

    XeonBotInc.reply(`${cuObj.code}`);
    if (!isDeveloper) {
        cooldowns.set(userID, Date.now());
        setTimeout(() => cooldowns.delete(userID), 30000);
    }
}
break;

case 'delpair': {
         if (!isOwner) {
    return XeonBotInc.reply('Owner only command.')
}
        if (!text) return XeonBotInc.reply(`Example:\n ${prefix + command} 91xxx`)
 target = text.split("|")[0]
const Xreturn = XeonBotInc.message?.reply_to_message ? XeonBotInc.message?.reply_to_message.from.id 
        : target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
var contactInfo1 =  Xreturn;
  if (contactInfo1.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }

        const targetID = Xreturn.trim();
        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${targetID}`;

        try {
            if (!fs.existsSync(targetPath)) {
                return XeonBotInc.reply(`Paired device with ID "${targetID}" does not exist.`);
            }
            fs.rmSync(targetPath, { recursive: true, force: true });

            XeonBotInc.reply(`Paired device with ID "${targetID}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return XeonBotInc.reply('An error occurred while attempting to delete the paired device.');
        }
    }
break;

    case 'listpair': {
    if (!isOwner) {
        return XeonBotInc.reply(`This command is only for owner.`);
    }

    const pairingPath = './lib2/pairing';

    try {
        if (!fs.existsSync(pairingPath)) {
            return XeonBotInc.reply('No paired devices found.');
        }
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name.replace('@s.whatsapp.net', ''));
        if (pairedDevices.length === 0) {
            return XeonBotInc.reply('No paired devices found.');
        }
        const totalUsers = pairedDevices.length;
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        XeonBotInc.reply(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return XeonBotInc.reply('Failed to load paired devices data.');
    }
}
break;

case 'clearpair': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command.')

    const pairingPath = './lib2/pairing'
    try {
        if (!fs.existsSync(pairingPath)) {
            return XeonBotInc.reply('No pairing data found.')
        }

        fs.rmSync(pairingPath, { recursive: true, force: true })
        fs.mkdirSync(pairingPath)

        XeonBotInc.reply('✅ All paired devices have been cleared.')
    } catch (err) {
        console.error(err)
        XeonBotInc.reply('❌ Failed to clear paired devices.')
    }
}
break

case 'addowner': {
    if (!isOwner) return XeonBotInc.reply('Owner only')
    if (!text) return XeonBotInc.reply('Usage: /addowner <id>')

    if (OWNER.includes(text)) return XeonBotInc.reply('Already owner')

    OWNER.push(text)
    saveJSON(ownerFile, OWNER)

    XeonBotInc.reply(`✅ Owner added:\n${text}`)
}
break

case 'delowner': {
    if (!isOwner) return XeonBotInc.reply('Owner only')
    if (!text) return XeonBotInc.reply('Usage: /delowner <id>')

    OWNER = OWNER.filter(v => v !== text)
    saveJSON(ownerFile, OWNER)

    XeonBotInc.reply(`❌ Owner removed:\n${text}`)
}
break

case 'listowner': {
    let txt = '👑 OWNER LIST\n\n'
    OWNER.forEach((v, i) => {
        txt += `${i + 1}. ${v}\n`
    })
    XeonBotInc.reply(txt)
}
break

case 'clearowner': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command.')

    OWNER = []
    saveJSON(ownerFile, OWNER)

    XeonBotInc.reply('⚠️ All owners have been cleared.\nDeveloper access is still safe.')
}
break

case 'adddevolper': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command')
    if (!text) return XeonBotInc.reply('Usage: /adddevolper <id>')

    if (DEVELOPER.includes(text)) return XeonBotInc.reply('Already a developer')

    DEVELOPER.push(text)
    saveJSON(devFile, DEVELOPER)
    global.DEVELOPER = DEVELOPER

    XeonBotInc.reply(`✅ Developer added:\n${text}`)
}
break

case 'deldevolper': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command')
    if (!text) return XeonBotInc.reply('Usage: /deldevolper <id>')

    DEVELOPER = DEVELOPER.filter(v => v !== text)
    saveJSON(devFile, DEVELOPER)
    global.DEVELOPER = DEVELOPER

    XeonBotInc.reply(`❌ Developer removed:\n${text}`)
}
break

case 'listdevolper': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command')

    let txt = '👨‍💻 DEVELOPER LIST\n\n'
    DEVELOPER.forEach((v, i) => {
        txt += `${i + 1}. ${v}\n`
    })

    XeonBotInc.reply(txt)
}
break

case 'cleardevolper': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command')

    DEVELOPER = []
    saveJSON(devFile, DEVELOPER)
    global.DEVELOPER = DEVELOPER

    XeonBotInc.reply('⚠️ All developers have been cleared.')
}
break

case 'addprem': {
    if (!isOwner) return XeonBotInc.reply('Owner only')
    if (!text) return XeonBotInc.reply('Usage: /addprem <id>')

    if (PREMIUM.includes(text)) return XeonBotInc.reply('Already premium')

    PREMIUM.push(text)
    saveJSON(premFile, PREMIUM)

    XeonBotInc.reply(`💎 Premium added:\n${text}`)
}
break

case 'delprem': {
    if (!isOwner) return XeonBotInc.reply('Owner only')
    if (!text) return XeonBotInc.reply('Usage: /delprem <id>')

    PREMIUM = PREMIUM.filter(v => v !== text)
    saveJSON(premFile, PREMIUM)

    XeonBotInc.reply(`❌ Premium removed:\n${text}`)
}
break

case 'listprem': {
    let txt = '💎 PREMIUM USERS\n\n'
    PREMIUM.forEach((v, i) => {
        txt += `${i + 1}. ${v}\n`
    })
    XeonBotInc.reply(txt)
}
break

case 'clearprem': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command.')

    PREMIUM = []
    saveJSON(premFile, PREMIUM)

    XeonBotInc.reply('✅ All premium users have been cleared.')
}
break

case 'clearall': {
    if (!isDeveloper) return XeonBotInc.reply('Developer only command.')

    try {
        // 🔥 Clear pairing
        const pairingPath = './lib2/pairing'
        if (fs.existsSync(pairingPath)) {
            fs.rmSync(pairingPath, { recursive: true, force: true })
            fs.mkdirSync(pairingPath)
        }

        // 🔥 Clear premium
        PREMIUM = []
        saveJSON(premFile, PREMIUM)

        // 🔥 Clear owners
        OWNER = []
        saveJSON(ownerFile, OWNER)

        XeonBotInc.reply(
`⚠️ CLEAR ALL SUCCESSFUL

✅ All paired devices cleared
✅ All premium users cleared
✅ All owners cleared

👑 Developer access is still SAFE`
        )
    } catch (err) {
        console.error(err)
        XeonBotInc.reply('❌ Failed to clear all data.')
    }
}
break

case 'mystatus': {
    XeonBotInc.reply(
`
╔───────────────╗
👤 USER STATUS
╚───────────────╝

╔───────────────╗
🆔 ID: ${userId}
✶⊶⊷⊶⊷❍ 
🧠 Developer: ${isDeveloper}
✶⊶⊷⊶⊷❍
👑 Owner: ${isOwner}
✶⊶⊷⊶⊷❍
💎 Premium: ${isPremium}
✶⊶⊷⊶⊷❍
🤖 Mode: ${global.mode}
╚───────────────╝`
    )
}
break

case 'self': {
    if (!isOwner) return XeonBotInc.reply('Owner only')
    global.mode = 'self'
    XeonBotInc.reply('🔒 Bot is now SELF mode')
}
break

case 'public': {
    if (!isOwner) return XeonBotInc.reply('Owner only')
    global.mode = 'public'
    XeonBotInc.reply('🌐 Bot is now PUBLIC mode')
}
break

    
case 'runtime':{
    XeonBotInc.deleteMessage().catch(() => {});
      reply(`Bahirava Bug Bot is Online ${runtime(process.uptime())}`)
    }
  break
            default:
        }
    } catch (e) {
        XeonBotInc.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})