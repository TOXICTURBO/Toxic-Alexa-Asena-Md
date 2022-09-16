const { command } = require('../lib/')
command({pattern: 'pp ?(.*)', fromMe: true, desc: 'set profile picture in any resolution', type: 'user'}, async (message, match) => {
if (!message.reply_message || !message.reply_message.image) return await message.send('_Reply to a image._')
const media = await message.reply_message.downloadAndSaveMedia()
await message.updateProfilePicture(message.user_id, media)
await message.send('_Successfully Profile Picture Updated_')
});

command({pattern: 'fullpp ?(.*)', fromMe: true, desc: 'set profile picture in any resolution', type: 'user'}, async (message, match) => {
if (!message.reply_message || !message.reply_message.image) return await message.send('_Reply to a image._')
const media = await message.reply_message.downloadAndSaveMedia()
await message.updateProfilePicture(message.user_id, media)
await message.send('_Successfully Profile Picture Updated_')
});

command({pattern: 'gpp ?(.*)', fromMe: true, desc: 'set group icon in any resolution', type: 'group'}, async (message, match) => {
if (!message.isGroup) return await message.send('_This command only works in group chats_')
const isbotAdmin = await isBotAdmins(m)
if (!isBotAdmins) return await message.send("I'm not an admin")
if (!message.reply_message || !message.reply_message.image) return await message.send('_Reply to a image._')
const media = await message.reply_message.downloadAndSaveMedia()
await message.updateProfilePicture(message.jid, media)
await message.send('_Successfully Group icon Updated_')
});

command({pattern: 'block', fromMe: true, desc: 'Block a person', type: 'user'}, async (message, match) => {
const id = message.mention[0] || message.reply_message.sender || (!message.isGroup && message.jid)
if (!id) return await message.send('*Give me a user*')
await message.send('_Blocked_')
await message.client.updateBlockStatus(id, 'block');
});

command({pattern: 'unblock', fromMe: true, desc: 'Unblock a person', type: 'user'}, async (message, match) => {
const id = message.mention[0] || message.reply_message.sender || (!message.isGroup && message.jid)
if (!id) return await message.send('*Give me a user*')
await message.send('_Unblocked_')
await message.client.updateBlockStatus(id, 'unblock');
});
