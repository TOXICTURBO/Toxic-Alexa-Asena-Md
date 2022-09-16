const {command} = require("../lib/");
command({pattern: 'log ?(.*)', fromMe: true, desc: 'getlog of the msg', type: 'info'}, async (m) => {  m.reply(JSON.stringify(m.quoted.data,null,2))});
