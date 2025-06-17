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
