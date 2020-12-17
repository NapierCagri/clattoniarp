const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
  if (
    message.member.roles.has("763696081899880449") ||
    message.member.hasPermission("MANAGE_ROLES")
  ) {
    let rMember =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!rMember) return message.channel.send(`Kime vereceğimi söylemedin ki`);

    let ozel = "764223460054138880";
    let genel = "764223704485199912";
    let genel2 = "764223918570471454";
    
    if (rMember.roles.has(genel))
      return message.channel.sendEmbed(
        new Discord.RichEmbed()
          .setDescription("Bunda zaten bu rol var ya")
          .setColor("GREEN")
      );
    if (rMember.roles.has(ozel))
      return message.channel.sendEmbed(
        new Discord.RichEmbed()
          .setDescription("Çift cinsiyet alamazsınız.")
          .setColor("GREEN")
      );
    rMember.addRole(genel);
    rMember.addRole(genel2);
    //rMember.addRole(genel);
    message.channel.send("Rolleri verdim!!!");
    db.set(`cins_${rMember.id}`, "Kadın")
  } else {
    return message.channel.send(
      "Sende bu yetki yok"
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "Şaka ekibi rolünü alır",
  usage: "g!alıntı mesaj id"
};
