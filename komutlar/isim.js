const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

let rMember =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
  let id = rMember.id
  let mesaj = args.slice(1).join(' ');
  message.guild.members.get(id).setNickname(mesaj)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'isim',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};