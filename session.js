
const { useSingleFileAuthState } = require('@adiwajshing/baileys');

const { state, saveState } = useSingleFileAuthState('./auth.json');

module.exports = { state, saveState };

