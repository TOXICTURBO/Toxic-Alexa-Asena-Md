/*Codded by @TURBOHYPER
Whatsapp: wa.me/+916380260672 
Instagram: toxic_turbo777
Thanks:
*İdea by @TURBOHYPER
copy with credits
*/


const { command } = require("../lib/");

command(
  {
    pattern: "ping ?(.*)",
    fromMe: true,
    desc: "To check ping",
    type: "misc",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("```Ping!```");
    const end = new Date().getTime();
    return await message.sendMessage(
      "*Ping!*\n ```" + (end - start) + "``` *ms*"
    );
  }
);
