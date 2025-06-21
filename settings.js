require('dotenv').config()
const settingsMenu = `
✨ 𝐃𝚰𝐋 - 𝚳𝐃 Bot Settings ✨
🔘 Auto Read Inbox: process.env.AUTO_READ_INBOX === 'true' ? '✅ On' : '❌ Off'
🔘 Allow Reactions:{process.env.ALLOW_REACTIONS === 'true' ? '✅ On' : '❌ Off'}
🔘 Anti-Link Remove: process.env.ANTILINK_REMOVE === 'true' ? '✅ On' : '❌ Off'
🔘 Delete Links:{process.env.DELETE_LINKS === 'true' ? '✅ On' : '❌ Off'}
🔘 Allow Group Commands: process.env.ALLOW_GROUP_COMMANDS === 'true' ? '✅ On' : '❌ Off'
🔘 Fake Typing:{process.env.FAKE_TYPING === 'true' ? '✅ On' : '❌ Off'}
🔘 Fake Recording: process.env.FAKE_RECORDING === 'true' ? '✅ On' : '❌ Off'
🔘 Fake Online:{process.env.FAKE_ONLINE === 'true' ? '✅ On' : '❌ Off'}
🔘 Bot Mode: ${process.env.BOT_MODE || 'private'}
📺 Channel: https://whatsapp.com/channel/0029Vb5vW8yLikgAkyNxnY1H
`console.log(settingsMenu)
