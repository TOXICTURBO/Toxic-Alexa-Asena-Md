const { command, qrcode } = require("../lib/");
const jimp = require("jimp");
const QRReader = require("qrcode-reader");

command(
  { pattern: "qr ?(.*)", fromMe: true, desc: "Read/Write Qr.", type: "misc" },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (match) {
      let buff = await qrcode(match);
      return await message.sendMessage(buff, {}, "image");
    } else if (!message.reply_message || !message.reply_message.image)
      return await message.send("*Example : qr test*\n*Reply to a qr image.*");

    const { bitmap } = await jimp.read(
      await message.reply_message.downloadMediaMessage()
    );
    const qr = new QRReader();
    qr.callback = (err, value) =>
      message.send(err ?? value.result, { quoted: message.data });
    qr.decode(bitmap);
  }
);
