const settings = {
  AUTO_READ_INBOX: process.env.AUTO_READ_INBOX === 'true',
  ALLOW_GROUP_COMMANDS: process.env.ALLOW_GROUP_COMMANDS === 'true'
};

const showSettingsMenu = () => {
  return `
╭━━━〔 *⚙️ BOT SETTINGS PANEL* 〕━━━╮

📩 *Auto Read Inbox*: settings.AUTO_READ_INBOX ? '🟢 ON' : '🔴 OFF'
👥 *Group Commands*:{settings.ALLOW_GROUP_COMMANDS ? '🟢 ALLOWED' : '🔴 BLOCKED'}

╰━━━━━━━━━━━━━━━━━━━━━━╯
💡 _Use the commands below to change settings:_

🛠 *set autoread on/off*  
🛠 *set groupcmd on/off*
`;
};

module.exports = { settings, showSettingsMenu };

const autoReadInbox = process.env.AUTO_READ_INBOX === 'true';
const allowGroupCommands = process.env.ALLOW_GROUP_COMMANDS === 'true';
const ownerNumber = process.env.OWNER_NUMBER;

client.on('message.upsert', async (msg) => {
  if (!msg.messages) return;
  const message = msg.messages[0];
  const from = message.key.remoteJid;

  if (autoReadInbox && !from.endsWith('@g.us')) {
    client.sendReadReceipt(from, message.key.participant, [message.key.id]);
  }

  if (from.endsWith('@g.us') && !allowGroupCommands) {
    if (message.key.fromMe === false) return;
    if (message.key.participant !== ownerNumber + '@s.whatsapp.net') return;
    return;
  }

  // Additional message handling here
});


const { default: makeWASocket, useSingleFileAuthState } = require('@adiwajshing/baileys');

const { state, saveState } = useSingleFileAuthState('./auth.json');

const sock = makeWASocket({ auth: state });

sock.ev.on('creds.update', saveState);


sock.ev.on('messages.upsert', async ({ messages, type }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const from = msg.key.remoteJid;
  const isGroup = from.endsWith('@g.us');
  if (!isGroup) {
    await sock.readMessages([msg.key]);
  }
});
