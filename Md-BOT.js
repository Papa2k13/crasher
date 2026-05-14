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
    m.mtype === "audioMessage" ? m.message.audioMessage?.caption || "" :
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
const from = m.key.remoteJid
const isGroup = m.isGroup
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
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
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const data = date = dataa = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

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

const googleTTS = require('google-tts-api');

const ttsAI = async (text, lang = 'en') => {
    try {
        const url = googleTTS.getAudioUrl(text, {
            lang: lang,
            slow: false,
            host: 'https://translate.google.com',
        });

        const res = await axios.get(url, {
            responseType: 'arraybuffer'
        });

        return Buffer.from(res.data);
    } catch (err) {
        console.log('TTS ERROR:', err.message);
        return null;
    }
};

// ===== SILENT MEMBER TRACKER =====
global.lastChat = global.lastChat || {}

if (m.isGroup && !m.fromMe) {
    global.lastChat[m.chat] = global.lastChat[m.chat] || {}
    global.lastChat[m.chat][sender] = Date.now()
}

// ===== REAL ANTI-BOT ENGINE =====
global.antibot = global.antibot || {}

const isAdminUserAntibot =
isGroup && groupAdmins.some(a => areJidsSameUser(a, sender))

const isBotUser =
sender.includes(':') || sender.endsWith('@bot')

if (
isGroup &&
global.antibot[m.chat] &&
!isAdminUserAntibot &&
isBotUser
) {
try {
await XeonBotInc.sendMessage(m.chat, { delete: m.key })
await XeonBotInc.groupParticipantsUpdate(
m.chat,
[sender],
'remove'
)
replygcxeon('🤖 Bot detected & removed')
} catch (e) {
console.log('ANTIBOT ERROR:', e)
}
}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync(__filename, 'utf8');
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


const askAI = async (prompt) => {
try {
const res = await axios.post(
"https://api.openai.com/v1/chat/completions",
{
model: global.AI_MODEL,
messages: [{ role: "user", content: prompt }],
temperature: 0.7
},
{
headers: {
Authorization: `Bearer ${global.AI_KEY}`,
"Content-Type": "application/json"
}
}
)
return res.data.choices[0].message.content.trim()
} catch (e) {
console.log(e)
return "aι ιѕ noт reѕpondιng rιgнт now."
}
}

const isGroupOnly = () => {
  if (!m.isGroup) {
    replygcxeon(global.groupOnlyMsg)
    return true
  }
  return false
}

// ignore bot's own messages BUT allow commands
if (m.fromMe && !isCmd) return
switch(command) {

case 'silentwarn': {
if (!m.isGroup) return replygcxeon('Group only')

if (!q) return replygcxeon('Example: .silentwarn 3d')

let duration = ms(q)
if (!duration) return replygcxeon('Invalid time format')

global.warn = global.warn || {}

let now = Date.now()
let warned = []

for (let p of participants) {
    if (p.admin) continue

    let last = global.lastChat?.[m.chat]?.[p.id] || 0
    if (now - last >= duration) {
        global.warn[p.id] = (global.warn[p.id] || 0) + 1
        warned.push(p.id)
    }
}

if (warned.length === 0)
return replygcxeon(`✅ No silent members for ${q}`)

let teks = `⚠️ *Silent Warning*\n⏳ Inactive for: ${q}\n\n`
warned.forEach(u=>{
teks += `• @${u.split('@')[0]} (Warn +1)\n`
})

XeonBotInc.sendMessage(m.chat,{text:teks,mentions:warned},{quoted:m})
}
break

case 'ghostcheck': {
if (!m.isGroup) return replygcxeon('Group only')

let now = Date.now()
let limit = ms('30d')
let ghosts = []

for (let p of participants) {
    let last = global.lastChat?.[m.chat]?.[p.id] || 0

    if (last !== 0 && now - last >= limit) {
        ghosts.push(p.id)
    }
}

if (ghosts.length === 0)
return replygcxeon('✅ No ghost members found')

let teks = `👻 *Ghost Members*\n(Inactive ~30 days)\n\n`
ghosts.forEach(u=>{
teks += `• @${u.split('@')[0]}\n`
})

XeonBotInc.sendMessage(m.chat,{text:teks,mentions:ghosts},{quoted:m})
}
break

case 'silenttag': {
if (!m.isGroup) return replygcxeon('Group only')

if (!q) return replygcxeon('Example: .silenttag 5d')

let duration = ms(q)
if (!duration) return replygcxeon('Invalid time')

let now = Date.now()
let silent = []

for (let p of participants) {
    if (p.admin) continue

    let last = global.lastChat?.[m.chat]?.[p.id] || 0
    if (now - last >= duration) {
        silent.push(p.id)
    }
}

if (silent.length === 0)
return replygcxeon(`✅ No silent members for ${q}`)

let teks = `🔔 *Silent Reminder*\n⏳ Inactive for: ${q}\n\n`
silent.forEach(u=>{
teks += `• @${u.split('@')[0]}\n`
})
teks += `\n⚠️ Please be active to avoid removal.`

XeonBotInc.sendMessage(m.chat,{text:teks,mentions:silent},{quoted:m})
}
break

case 'silent': {
if (!m.isGroup) return replygcxeon('Group only command')
if (!q) return replygcxeon('Example:\n.silent 5d\n.silent 12h')

let time = q.toLowerCase()
let msTime = ms(time)

if (!msTime) return replygcxeon('Invalid time format')

let now = Date.now()
let silentUsers = []

for (let p of participants) {
    let last = global.lastChat?.[m.chat]?.[p.id] || 0
    if (now - last >= msTime) {
        silentUsers.push(p.id)
    }
}

if (silentUsers.length === 0) {
    return replygcxeon(`✅ No silent members for ${q}`)
}

let teks = `🧍‍♂️ *Silent Members*\n⏳ Inactive for: ${q}\n\n`
silentUsers.forEach(u => {
    teks += `• @${u.split('@')[0]}\n`
})

XeonBotInc.sendMessage(
m.chat,
{ text: teks, mentions: silentUsers },
{ quoted: m }
)
}
break

case 'silentremove': {
if (!m.isGroup) return replygcxeon('Group only command')
if (!q) return replygcxeon('Example:\n.silentremove 5d\n.silentremove 12h')

let duration = ms(q)
if (!duration) return replygcxeon('Invalid time format')

let now = Date.now()
let kickList = []

for (let p of participants) {
    if (p.admin) continue

    let last = global.lastChat?.[m.chat]?.[p.id] || 0
    if (now - last >= duration) {
        kickList.push(p.id)
    }
}

if (kickList.length === 0) {
    return replygcxeon(`✅ No silent members to remove for ${q}`)
}

// remove users
await XeonBotInc.groupParticipantsUpdate(
    m.chat,
    kickList,
    'remove'
)

let teks = `🚫 *Silent Members Removed*\n⏳ Inactive for: ${q}\n👥 Total removed: ${kickList.length}`
replygcxeon(teks)
}
break

case 'speakeng': {
if (!q) return replygcxeon('Please provide text to speak (English)')

let audio = await ttsAI(q, 'en')
if (!audio) return replygcxeon('Failed to generate English voice')

await XeonBotInc.sendMessage(
m.chat,
{
audio: audio,
mimetype: 'audio/mpeg',
ptt: true
},
{ quoted: m }
)
}
break

case 'speakurdu': {
if (!q) return replygcxeon('بولنے کے لیے اردو ٹیکسٹ لکھیں')

let audio = await ttsAI(q, 'ur')
if (!audio) return replygcxeon('اردو آواز generate نہیں ہو سکی')

await XeonBotInc.sendMessage(
m.chat,
{
audio: audio,
mimetype: 'audio/mpeg',
ptt: true
},
{ quoted: m }
)
}
break



// 1. tagall
case 'tagall': {
if (isGroupOnly()) break
let teks = '📢 *Tag All*\n\n'
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`
}
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
break

// 2. hidetag
case 'hidetag': {
if (isGroupOnly()) break
XeonBotInc.sendMessage(m.chat, { text: q || '', mentions: participants.map(a => a.id) })
}
break

// 3. group open
case 'open': {
if (isGroupOnly()) break
await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
replygcxeon('🔓 Group opened')
}
break

// 4. group close
case 'close': {
if (isGroupOnly()) break
await XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
replygcxeon('🔒 Group closed')
}
break

// 5. setdesc
case 'setdesc': {
if (isGroupOnly()) break
await XeonBotInc.groupUpdateDescription(m.chat, q)
replygcxeon('✅ Description updated')
}
break

// 6. setname
case 'setname': {
if (isGroupOnly()) break
await XeonBotInc.groupUpdateSubject(m.chat, q)
replygcxeon('✅ Group name updated')
}
break

// 7. revoke link
case 'revokelink': {
if (isGroupOnly()) break
await XeonBotInc.groupRevokeInvite(m.chat)
replygcxeon('🔁 Link revoked')
}
break

// 8. grouplink
case 'linkgc': {
if (isGroupOnly()) break
let link = await XeonBotInc.groupInviteCode(m.chat)
replygcxeon(`https://chat.whatsapp.com/${link}`)
}
break

// 9. mute
case 'mute': {
if (isGroupOnly()) break
global.mute = global.mute || {}
global.mute[m.chat] = true
replygcxeon('🔇 Group muted')
}
break

// 10. unmute
case 'unmute': {
if (isGroupOnly()) break
global.mute[m.chat] = false
replygcxeon('🔊 Group unmuted')
}
break

// 11. delete msg
case 'del': {
if (!m.quoted) return
await XeonBotInc.sendMessage(m.chat, { delete: m.quoted.key })
}
break

// 12. info
case 'infogc': {
if (isGroupOnly()) break
replygcxeon(`👥 Members: ${participants.length}`)
}
break

// 13. admins
case 'admins': {
if (isGroupOnly()) break
let teks = '👑 *Admins*\n\n'
for (let a of groupAdmins) teks += `@${a.split('@')[0]}\n`
replygcxeon(teks)
}
break

// 14. owner
case 'owner': {
replygcxeon(`👤 Owner: ${ownername}`)
}
break

// 15. rules
case 'rules': {
replygcxeon('📜 Group rules:\n1. No spam\n2. Respect all')
}
break

// 16. welcome on
case 'welcomeon': {
if (isGroupOnly()) break
global.welcome = global.welcome || {}
global.welcome[m.chat] = true
replygcxeon('✅ Welcome enabled')
}
break

// 17. welcome off
case 'welcomeoff': {
if (isGroupOnly()) break
global.welcome = global.welcome || {}
global.welcome[m.chat] = false
replygcxeon('Welcome disabled')
}
break

// 18. vote
case 'vote': {
if (isGroupOnly()) break
replygcxeon(`🗳 Vote started:\n${q}`)
}
break

// 19. poll
case 'poll': {
if (isGroupOnly()) break
let options = q.split('|')
await XeonBotInc.sendMessage(m.chat, {
poll: {
name: options[0],
values: options.slice(1)
}
})
}
break

// 20. say
case 'say': {
if (isGroupOnly()) break
replygcxeon(q)
}
break

// 21. warn
case 'warn': {
if (!m.isGroup) break
let user = m.mentionedJid[0] || m.quoted?.sender
if (!user) return replygcxeon('Tag user')
global.warn = global.warn || {}
global.warn[user] = (global.warn[user] || 0) + 1
replygcxeon(`⚠️ Warning to @${user.split('@')[0]}`, [user])
}
break

// 22. unwarn
case 'unwarn': {
if (!m.isGroup) break
let user = m.mentionedJid[0] || m.quoted?.sender
if (!user) return
global.warn[user] = 0
replygcxeon('✅ Warnings cleared')
}
break

// 23. warnlist
case 'warnlist': {
if (!m.isGroup) break
let teks = '⚠️ Warning List\n\n'
for (let u in (global.warn || {})) {
teks += `@${u.split('@')[0]} : ${global.warn[u]}\n`
}
replygcxeon(teks)
}
break

// 26. antibot on
case 'antiboton': {
if (!m.isGroup) break
global.antibot = global.antibot || {}
global.antibot[m.chat] = true
replygcxeon('🤖 AntiBot enabled')
}
break

// 27. antibot off
case 'antibotoff': {
if (!m.isGroup) break
global.antibot = global.antibot || {}
global.antibot[m.chat] = false
replygcxeon('AntiBot disabled')
}
break

// 28. slowmode
case 'slowmode': {
if (!m.isGroup) break
global.slow = global.slow || {}
global.slow[m.chat] = Number(q)
replygcxeon(`🐢 Slowmode set to ${q}s`)
}
break

// 29. removeslow
case 'removeslow': {
if (!m.isGroup) break
global.slow = global.slow || {}
global.slow[m.chat] = 0
replygcxeon('🚀 Slowmode disabled')
}
break

// 30. lockname
case 'lockname': {
if (!m.isGroup) break
global.lockname = global.lockname || {}
global.lockname[m.chat] = true
replygcxeon('🔒 Group name locked')
}
break

// 31. unlockname
case 'unlockname': {
if (!m.isGroup) break
global.lockname = global.lockname || {}
global.lockname[m.chat] = false
replygcxeon('🔓 Group name unlocked')
}
break

// 32. online
case 'online': {
if (!m.isGroup) break
replygcxeon(`👥 Total Members: ${participants.length}`)
}
break

// 33. count
case 'count': {
if (!m.isGroup) break
replygcxeon(`👥 Total Members: ${participants.length}`)
}
break

// 34. removeinactive
case 'inactive': {
if (!m.isGroup) break
let kickUsers = participants.filter(p => !p.admin).map(p => p.id)
await XeonBotInc.groupParticipantsUpdate(m.chat, kickUsers, 'remove')
replygcxeon('🧹 Inactive members removed')
}
break

// 35. tagadmins
case 'tagadmins': {
if (!m.isGroup) break
let teks = '👑 Admins:\n'
for (let a of groupAdmins) teks += `@${a.split('@')[0]}\n`
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: groupAdmins })
}
break

// 36. ruleset
case 'ruleset': {
global.rules = global.rules || {}
global.rules[m.chat] = q
replygcxeon('📜 Rules updated')
}
break

// 37. ruleshow
case 'ruleshow': {
replygcxeon(global.rules?.[m.chat] || 'No rules set')
}
break

// 38. clearwarn
case 'clearwarn': {
global.warn = {}
replygcxeon('🧹 All warnings cleared')
}
break

// 39. report
case 'report': {
if (!m.isGroup) break
let teks = `🚨 Report from @${sender.split('@')[0]}\n\n${q}`
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: groupAdmins })
}
break

// 40. staff
case 'staff': {
replygcxeon(`👑 Staff:\nBot Owner: ${ownername}`)
}
break

// 41. tagme
case 'tagme': {
replygcxeon(`👋 @${sender.split('@')[0]}`, [sender])
}
break

// 42. quote
case 'quote': {
const quotes = ['Stay strong', 'Never give up', 'Believe yourself']
replygcxeon(quotes[Math.floor(Math.random()*quotes.length)])
}
break

// 43. roll
case 'roll': {
replygcxeon(`🎲 You got: ${Math.floor(Math.random()*6)+1}`)
}
break

// 44. flip
case 'flip': {
replygcxeon(Math.random() > 0.5 ? '🪙 Heads' : '🪙 Tails')
}
break

// 45. math
case 'math': {
try {
if (!/^[0-9+\-*/(). ]+$/.test(q)) return replygcxeon('Invalid math')
replygcxeon(eval(q).toString())
} catch {
replygcxeon('Invalid math')
}
}
break

// 46. uptime
case 'uptime': {
replygcxeon(`⏱ Uptime: ${runtime(process.uptime())}`)
}
break

// 47. groupid
case 'groupid': {
replygcxeon(`🆔 ${m.chat}`)
}
break

// 48. myid
case 'myid': {
replygcxeon(`👤 ${sender}`)
}
break

// 49. leave
case 'leave': {
await XeonBotInc.groupLeave(m.chat)
}
break

case 'ai': {
if (!q) return replygcxeon('Ask something')
let r = await askAI(q)
replygcxeon(r)
}
break

case 'aishort': {
let r = await askAI(`Reply shortly: ${q}`)
replygcxeon(r)
}
break

case 'ailong': {
let r = await askAI(`Explain in detail: ${q}`)
replygcxeon(r)
}
break

case 'aifunny': {
let r = await askAI(`Reply in funny way: ${q}`)
replygcxeon(r)
}
break

case 'aiurdu': {
let r = await askAI(`Reply in Urdu: ${q}`)
replygcxeon(r)
}
break

case 'airoman': {
let r = await askAI(`Reply in Roman Urdu: ${q}`)
replygcxeon(r)
}
break

case 'aitranslate': {
let r = await askAI(`Translate this: ${q}`)
replygcxeon(r)
}
break

case 'aisummary': {
let r = await askAI(`Summarize this text: ${q}`)
replygcxeon(r)
}
break

case 'airewrite': {
let r = await askAI(`Rewrite professionally: ${q}`)
replygcxeon(r)
}
break

case 'aiexplain': {
let r = await askAI(`Explain simply: ${q}`)
replygcxeon(r)
}
break

case 'aitoxic': {
let r = await askAI(`Is this toxic? Answer yes/no and reason: ${q}`)
replygcxeon(r)
}
break

case 'aispam': {
let r = await askAI(`Is this spam? ${q}`)
replygcxeon(r)
}
break

case 'aibadword': {
let r = await askAI(`Detect bad words in this: ${q}`)
replygcxeon(r)
}
break

case 'aiscam': {
let r = await askAI(`Is this scam? Explain: ${q}`)
replygcxeon(r)
}
break

case 'aimod': {
let r = await askAI(`What moderation action should be taken for this message: ${q}`)
replygcxeon(r)
}
break

case 'aigrammar': {
let r = await askAI(`Fix grammar: ${q}`)
replygcxeon(r)
}
break

case 'aicaption': {
let r = await askAI(`Write a caption for: ${q}`)
replygcxeon(r)
}
break

case 'aibio': {
let r = await askAI(`Create bio: ${q}`)
replygcxeon(r)
}
break

case 'aiemoji': {
let r = await askAI(`Add emojis to this: ${q}`)
replygcxeon(r)
}
break

case 'aihashtag': {
let r = await askAI(`Generate hashtags for: ${q}`)
replygcxeon(r)
}
break

case 'aicode': {
let r = await askAI(`Explain this code: ${q}`)
replygcxeon(r)
}
break

case 'aicodefix': {
let r = await askAI(`Fix this code: ${q}`)
replygcxeon(r)
}
break

case 'aijoke': {
replygcxeon(await askAI("Tell a clean joke"))
}
break

case 'aiquote': {
replygcxeon(await askAI("Give a motivational quote"))
}
break

case 'aistory': {
replygcxeon(await askAI(`Write a short story about: ${q}`))
}
break

case 'airiddle': {
replygcxeon(await askAI("Give a riddle"))
}
break

case 'aitruth': {
replygcxeon(await askAI("Give a truth question"))
}
break

case 'aidare': {
replygcxeon(await askAI("Give a dare challenge"))
}
break

case 'airoast': {
replygcxeon(await askAI(`Roast lightly: ${q}`))
}
break

case 'aicompliment': {
replygcxeon(await askAI(`Give a compliment to: ${q}`))
}
break

case 'ailove': {
replygcxeon(await askAI(`Love compatibility for: ${q}`))
}
break

case 'aidaily': {
replygcxeon(await askAI("Give daily motivation"))
}
break

case 'eval': {
if (sender !== global.owner) return
try {
let evaled = eval(q)
replygcxeon(util.format(evaled))
} catch (e) {
replygcxeon(String(e))
}
}
break

case 'kick': {
if (!m.isGroup) return replygcxeon('Group only')
let user = m.mentionedJid[0] || m.quoted?.sender
if (!user) return replygcxeon('Tag user')

await XeonBotInc.groupParticipantsUpdate(m.chat, [user], 'remove')
replygcxeon('🚫 User removed')
}
break

case 'add': {
if (!m.isGroup) return replygcxeon('Group only')
if (!q) return replygcxeon('Example: .add 923xxxxxxxxx')
let user = q.replace(/[^0-9]/g,'') + '@s.whatsapp.net'

await XeonBotInc.groupParticipantsUpdate(m.chat, [user], 'add')
replygcxeon('✅ User added')
}
break

case 'promote': {
if (!m.isGroup) return replygcxeon('Group only')
let user = m.mentionedJid[0] || m.quoted?.sender
if (!user) return replygcxeon('Tag or reply user')


await XeonBotInc.groupParticipantsUpdate(m.chat, [user], 'promote')
replygcxeon('✅ User promoted')
}
break

case 'demote': {
if (!m.isGroup) return replygcxeon('Group only')
let user = m.mentionedJid[0] || m.quoted?.sender
if (!user) return replygcxeon('Tag a user')

await XeonBotInc.groupParticipantsUpdate(m.chat, [user], 'demote')
replygcxeon('✅ User demoted')
}
break

case 'ginfo': {
if (!m.isGroup) return replygcxeon('Group only command')

let metadata = await XeonBotInc.groupMetadata(m.chat)
let admins = metadata.participants.filter(v => v.admin)

replygcxeon(
`👥 *Group Info*
📛 Name: ${metadata.subject}
👤 Members: ${metadata.participants.length}
👑 Admins: ${admins.length}
🆔 ID: ${metadata.id}`
)
}
break

case 'ping': {
let start = Date.now()
await XeonBotInc.sendMessage(m.chat,{text:'Testing...'})
let end = Date.now()
replygcxeon(`🏓 Pong!
⚡ Speed: ${end - start} ms`)
}
break

case 'alive': {
replygcxeon(`🤖 *${ownername} Bot Is Alive!*

⏱ Uptime: ${runtime(process.uptime())}
📅 Date: ${tanggal()}
⚙️ Mode: ${global.botMode}
`)
}
break

case 'reqpair':

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
