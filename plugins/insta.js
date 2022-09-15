const { command } = require("../lib/");
const {
    Mimetype
} = require('@adiwajshing/baileys');
const fs = require('fs');
const got = require("got");
const axios = require('axios');
const {
    getPost,
    getStalk,
    getStory,
    skbuffer
} = require('raganork-bot');
const {
    downloadGram,
    pin,
    story
} = require("../lib/");
var need = "*_Need instagram link!_*";
var downloading = "_*Downloading*_";
var need_acc = "*_Need an instagram username!_*";
var fail = "*_Download failed! Check your link and try again_*";
var need_acc_s = "_Need an instagram username or link!_";
command({
    pattern: 'insta ?(.*)',
    fromMe: true,
    desc: 'Instagram post downloader',
    usage: 'insta link or reply to a link',
    use: 'download'
}, (async (msg, query) => {
     var q = query[1] || msg.reply_message?.text
     if (q && (q.startsWith('l') || q.includes('youtu'))) return;
    if (!q) return await msg.sendReply("*Need instagram link*")
    if (q.includes("stories")) return await msg.sendReply("*Use .story command!*")
    if (q && !q.includes('instagram.com')) return await msg.client.sendMessage(msg.jid, {
        text: need
    }, {
        quoted: msg.data
    })
    var getid = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/
    var url = getid.exec(q)
    if (url != null) {
        var res = await downloadGram(url[0])
        if (res == false) return await msg.sendReply("*Download failed*");
        var quoted = msg.reply_message ? msg.quoted : msg.data
        for (var i in res) {
        await msg.client.sendMessage(msg.jid,{[res[i].includes("jpg")?'image':'video']:{url:res[i]}},{quoted})
        };
    }
}));
