require('dotenv').config();

const { makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { default: P } = require('pino');
const { state, saveState } = useSingleFileAuthState(`./${process.env.SESSION_ID}.json`);

const sock = makeWASocket({
  logger: P({ level: 'silent' }),
  auth: state
});

sock.ev.on('creds.update', saveState);
