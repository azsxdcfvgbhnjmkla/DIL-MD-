
let groupCommandsEnabled = false;

sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const from = msg.key.remoteJid;
  const isGroup = from.endsWith('@g.us');
  const sender = msg.key.participant || from;

  const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

  if (sender === ownerNumber) {
    if (text.toLowerCase() === 'groupcmds on') {
      groupCommandsEnabled = true;
      await sock.sendMessage(from, { text: '✅ Group commands enabled.' });
      return;
    }
    if (text.toLowerCase() === 'groupcmds off') {
      groupCommandsEnabled = false;
      await sock.sendMessage(from, { text: '🚫 Group commands disabled.' });
      return;
    }
  }

  if (isGroup && !groupCommandsEnabled) {
    return;
  }

  if (text.toLowerCase() === 'ping') {
    await sock.sendMessage(from, { text: 'pong' });
  }
});

sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
  const from = msg.key.remoteJid;

  if (text.toLowerCase() === 'ping') {
    const start = Date.now();
    await sock.sendMessage(from, { text: 'Pinging...' });
    const latency = Date.now() - start;
    await sock.sendMessage(from, { text: `Pong! 🏓 Speed: ${latency}ms` });
  }
});
