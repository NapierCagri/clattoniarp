const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

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

    let ozel = "755815093563818124";
    let genel = "755814627824238672";
    let kayitv = "762978780217212961";
    let kayity = "762978466785394699";
    if (rMember.roles.has(kayity)) {
      rMember.addRole(kayitv);
      rMember.removeRole(kayity);
      message.channel.send(
      "Kaydı tamamlandı"
    );
    }

    if (rMember.roles.has(ozel))
      return message.channel.sendEmbed(
        new Discord.RichEmbed()
          .setDescription("Bunda zaten bu rol var ya")
          .setColor("GREEN")
      );
    rMember.addRole(ozel);
    rMember.addRole(genel);
    message.channel.send("Rolleri verdim!!!");
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
  name: "çeviklik",
  description: "Şaka ekibi rolünü alır",
  usage: "g!alıntı mesaj id"
};
