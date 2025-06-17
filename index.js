
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
