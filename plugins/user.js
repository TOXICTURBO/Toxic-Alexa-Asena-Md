const { command } = require('../lib/')
command({pattern: "setpp ?(.*)",
    fromMe: true,
    desc: "Set profile picture",
    type: "user",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply to a photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("_Profile Picture Updated_");
  }
);

command({pattern: 'fullpp ?(.*)', fromMe: true, desc: 'set profile picture in any resolution', type: 'user'}, async (message, match, m) => {
if (!message.reply_message.image)
      return await message.reply("_Reply to a photo_");
const media = await m.quoted.download();
await message.setPP(message.user_id, media)
await message.reply('_Successfully Profile Picture Updated_')
});

command({pattern: 'gpp ?(.*)', fromMe: true, desc: 'set group icon in any resolution', type: 'group'}, async (message, match, m) => {
if (!message.isGroup) return await message.send('_This command only works in group chats_')
const isbotAdmin = await isBotAdmins(m)
if (!isBotAdmins) return await message.reply("I'm not an admin")
if (!message.reply_message.image)
      return await message.reply("_Reply to a photo_");
const media = await message.reply_message.downloadAndSaveMedia()
await message.setPP(message.jid, media)
await message.send('_Successfully Group icon Updated_')
});

command(
  {
    pattern: "block ?(.*)",
    fromMe: true,
    desc: "Block a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.send(`_@${jid.split("@")[0]} Blocked_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User blocked_");
    }
  }
);

command(
  {
    pattern: "unblock ?(.*)",
    fromMe: true,
    desc: "Unblock a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a person or mention_");
      await message.block(jid);
      return await message.send(`_@${jid.split("@")[0]} unblocked_`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("_User unblocked_");
    }
  }
);

command(
  {
    pattern: "setname ?(.*)",
    fromMe: true,
    desc: "Set User name",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter name_");
    await message.updateName(match);
    return await message.reply(`_Username Updated : ${match}_`);
  }
);

command(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.send(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);
