
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
const sessionId = process.env.SESSION_ID;

require('dotenv').config();
const OWNER_NUMBER = process.env.OWNER_NUMBER;

require('dotenv').config();
const allowGroupCommands = process.env.ALLOW_GROUP_COMMANDS === 'true';

require('dotenv').config();
const AUTO_READ_INBOX = process.env.AUTO_READ_INBOX === 'true';

