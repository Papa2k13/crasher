//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @e1mox
//Instagram: ilv.mann
//Telegram: @e1mox
//GitHub: @e1mox
//WhatsApp: +918920266221
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/emoxinfo

function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1'); 
}

exports.noToken = "The bot token cannot be empty, please create a bot via https://t.me/BotFather";

exports.first_chat = (botname, pushname) => {
    return escapeMarkdownV2(`Hi bro ${pushname}, I am Bahirava Bug Bot @emox_bug_bot, a bot that can destroy WhatsApp users.
Click /menu to learn more about how to use this bot.`);
};