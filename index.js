sock.ev.on('messages.upsert', async ({ messages, type }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const from = msg.key.remoteJid;
  const isGroup = from.endsWith('@g.us');
  if (!isGroup) {
    await sock.readMessages([msg.key]);
  }
});
