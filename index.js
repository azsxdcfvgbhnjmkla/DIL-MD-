
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
