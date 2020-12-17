const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, client) => {
  let user = message.mentions.users.first()
let rMember =
      message.guild.member(message.mentions.users.first())
  let id = rMember.id
  message.guild.members.get(id).setNickname()

  let kisi = message.guild.members.get(user.id);
  db.set(`yas_${user.id}`, null);
  let bal = await db.fetch(`yas_${user.id}`);
  if (bal === null) bal = "Belirtilmemiş.";
  db.set(`guc_${user.id}`, null);
  let bal2 = await db.fetch(`guc_${user.id}`);
  if (bal2 === null) bal2 = "Belirtilmemiş.";
  db.set(`cins_${user.id}`, null);
  let cins = await db.fetch(`cins_${user.id}`);
  if (cins === null) cins = "Belirtilmemiş.";
  db.set(`hik_${user.id}`, null);
  let hik = await db.fetch(`hikaye_${user.id}`);
  if (hik === null) hik = "Belirtilmemiş.";
  db.set(`karakter_${user.id}`, null);
  let avt = await db.fetch(`karakter_${user.id}`);
  if (avt === null)
    avt =
      "https://www.gravatar.com/avatar/c788ed89b680f84d8ac0f13bed92bbea.jpg?size=240&d=https%3A%2F%2Fwww.artstation.com%2Fassets%2Fdefault_avatar.jpg";
  let par = await db.fetch(`money_${user.id}`);
  if (par === null) par = 0;
  let alt = await db.fetch(`altin_${user.id}`);
  if (alt === null) alt = 0;
  const embed = new Discord.RichEmbed()
    .setAuthor(user.username + "\nkişisinin profili sıfırlandı", user.avatarURL)
    .setImage(avt)
    .setColor("GREEN")
    .addField("İsim:", kisi.displayName)
    .addField("Yaş: ", bal)
    .addField("Güç: ", bal2)
    .addField("Cinsiyet: ", cins)
    .addField("Hikaye: ", hik)
    .addField("Dolar: ", par)
    .addField("Altın: ", alt);
  message.reply(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sıfırla"],
  permLevel: 3
};

exports.help = {
  name: "öldür",
  description: "Kişi hakkında bilgi verir.",
  usage: "!bilgi <kişi>"
};
