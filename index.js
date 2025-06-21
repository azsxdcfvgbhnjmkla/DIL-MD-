require('dotenv').config()
const settingsMenu = `
✨ 𝐃𝚰𝐋 - 𝚳𝐃 Bot Settings ✨
🔘 Auto Read Inbox: process.env.AUTO_READ_INBOX === 'true' ? '✅ On' : '❌ Off'
🔘 Allow Reactions:{process.env.ALLOW_REACTIONS === 'true' ? '✅ On' : '❌ Off'}
🔘 Anti-Link Remove: process.env.ANTILINK_REMOVE === 'true' ? '✅ On' : '❌ Off'
🔘 Delete Links:{process.env.DELETE_LINKS === 'true' ? '✅ On' : '❌ Off'}
🔘 Allow Group Commands: process.env.ALLOW_GROUP_COMMANDS === 'true' ? '✅ On' : '❌ Off'
🔘 Fake Typing:{process.env.FAKE_TYPING === 'true' ? '✅ On' : '❌ Off'}
🔘 Fake Recording: process.env.FAKE_RECORDING === 'true' ? '✅ On' : '❌ Off'
🔘 Fake Online:{process.env.FAKE_ONLINE === 'true' ? '✅ On' : '❌ Off'}
🔘 Bot Mode: ${process.env.BOT_MODE || 'private'}
📺 Channel: https://whatsapp.com/channel/0029Vb5vW8yLikgAkyNxnY1H
`console.log(settingsMenu)

const result = `🏓 𝑷𝑰𝑵𝑮 𝑹𝑬𝑺𝑷𝑶𝑵𝑺𝑬  
💡 Speed: *speedms*  
⏱ Uptime: *{formatUptime(uptime)}*  
📅 Date: *moment().format('YYYY-MM-DD')*  
🕒 Time: *{moment().format('HH:mm:ss')}*  

🖼️ Banner:  
https://files.catbox.moe/tc788a.jpg

📢 WhatsApp Channel:  
https://whatsapp.com/channel/0029Vb5vW8yLikgAkyNxnY1H`;

require('dotenv').config();
const mode = process.env.BOT_MODE || 'public';
if (mode === 'private') {
  // Bot in private mode: respond only to owner or allowed users
} else {
  // Bot in public mode: respond to everyone
}

require('dotenv').config();
const fakeOnline = process.env.FAKE_ONLINE === 'true';
// Usage example:
if (fakeOnline) {
  // Trigger fake online status here
}

require('dotenv').config();
const fakeRecording = process.env.FAKE_RECORDING === 'true';
// Usage example:
if (fakeRecording) {
  // Trigger fake recording indicator here
}

require('dotenv').config();
const fakeTyping = process.env.FAKE_TYPING === 'true';
// Usage example:
if (fakeTyping) {
  // Trigger fake typing indicator here
}

require('dotenv').config();
if (process.env.ANTI_LINK_REMOVE === 'true') {
  if (message.body && message.body.match(/https?:\/\/\S+/gi)) {
    if (message.body.toLowerCase().includes('remove')) {
      await sock.sendMessage(message.key.remoteJid, {
        audio: { url: 'https://files.catbox.moe/2quxev.mp3' },
        mimetype: 'audio/mpeg'
      });
    } else {
      await sock.sendMessage(message.key.remoteJid, { delete: message.key });
    }
  }
}

require('dotenv').config();
if (process.env.DELETE_LINKS === 'true') {
  if (message.body && message.body.match(/https?:\/\/\S+/gi)) {
    await sock.sendMessage(message.key.remoteJid, { delete: message.key });
  }
}

require('dotenv').config();
if (process.env.AUTO_REPLY_ALL === 'true') {
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;
    const content = msg.message.conversation || msg.message.extendedTextMessage?.text;
    if (content) {
      await sock.sendMessage(msg.key.remoteJid, { text: `You said: ${content}` }, { quoted: msg });
    }
  });
}

require('dotenv').config();
const allowReaction = process.env.ALLOW_MESSAGE_REACTION === 'true';
if (allowReaction) {
  // Code to add message reaction
  // e.g., client.sendMessageReaction(...)
}

require('dotenv').config();
const botName = process.env.BOT_NAME || "𝐃𝚰𝐋";
const defaultImageUrl = process.env.DEFAULT_IMAGE_URL || "https://files.catbox.moe/xz9v6f.jpg";
const allowImageChange = process.env.ALLOW_IMAGE_CHANGE === 'true';
// Example usage
console.log(`Bot Name: botName`);
console.log(`Default Image URL:{defaultImageUrl}`);
console.log(`Allow Image Change: ${allowImageChange}`);

require('dotenv').config();
const botName = process.env.BOT_NAME || '𝐃𝚰𝐋';
function respondToUser(input) {
  // Example simple reply
  return `botName: You said "{input}"`;
}
// Example usage
console.log(respondToUser("Hello"));

require('dotenv').config();
const botName = process.env.BOT_NAME || 'DIL-MD';
console.log(`Bot name: ${botName}`);

require('dotenv').config();

const { makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { default: P } = require('pino');
const { state, saveState } = useSingleFileAuthState(`./${process.env.SESSION_ID}.json`);

const sock = makeWASocket({
  logger: P({ level: 'silent' }),
  auth: state
});

sock.ev.on('creds.update', saveState);

require('dotenv').config();
const allowGroupCommands = process.env.ALLOW_GROUP_COMMANDS === 'true';

if (!allowGroupCommands && m.key.remoteJid.endsWith('@g.us')) return;

require('dotenv').config();
const autoReadInbox = process.env.AUTO_READ_INBOX === 'true';
if (autoReadInbox && m.key.remoteJid.endsWith('@s.whatsapp.net')) {
  await sock.readMessages([m.key]);
}


require('dotenv').config();
const apiKey = process.env.API_KEY;
console.log(apiKey);
