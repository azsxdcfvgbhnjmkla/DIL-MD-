
sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || msg.key.fromMe) return;

  const from = msg.key.remoteJid;
  const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

  if (text.toLowerCase() === 'ping') {
    const start = process.hrtime();
    await sock.sendMessage(from, { text: '🏓 Testing speed...' });
    const end = process.hrtime(start);
    const speed = (end[0] * 1000 + end[1] / 1e6).toFixed(2);
    await sock.sendMessage(from, { text: `🏁 Pong! Speed: ${speed}ms` });
  }
});

