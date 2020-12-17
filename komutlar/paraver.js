const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("Lütfen kaç dolar vereceğinizi giriniz.");
  if (isNaN(args[0])) return message.reply("Bu geçerli bir sayı değil.");

  let user = message.mentions.users.first();

  const aa = parseInt(args[0]);
  db.add(`money_${user.id}`, aa);
  db.subtract(`money_${message.author.id}`, aa);
  let bal = await db.fetch(`money_${message.author.id}`);
  if (bal < 1) {
    message.reply("Yetersiz bakiye");
    db.subtract(`money_${user.id}`, aa);
    db.add(`money_${message.author.id}`, aa);
    return;
  }
  if (aa < 1) {
    message.reply("0 veya daha küçük bir sayı giremezsiniz.");
    db.subtract(`money_${user.id}`, aa);
    db.add(`money_${message.author.id}`, aa);
    return;
  }
  message.channel.send(
    "<@" + user.id + "> kişisine " + args[0] + " dolar verdiniz."
  );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "paraver",
  description: "Çözdüğünüz soruları ekler",
  usage: "soruekle [soru sayısı]"
};
