const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, client) => {
  let esy = args.slice(0).join(" ");
  let para = 1;
  if (!args[1]) {

  } else if (isNaN(args[0])) {
   
  } else {
    const para = parseInt(args[0]);
  }
  
  
  let user = message.author;
  if (esy.length < 1)
    return message.reply("Ne satın alacağını belirtmen lazım.");
  if (esy.toLowerCase() === "su") {
    let bal3 = await db.fetch(`su_${user.id}`);
    if (bal3 < 1) {
      message.reply("suyun yok");

      return;
    }
    if (bal3 === null) bal3 = 0;
    message.reply("Su içildi.");
    db.subtract(`su_${user.id}`, para);
  } else {
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["use"],
  permLevel: 0
};

exports.help = {
  name: "kullan",
  description: "Kişi hakkında bilgi verir.",
  usage: "!bilgi <kişi>"
};
