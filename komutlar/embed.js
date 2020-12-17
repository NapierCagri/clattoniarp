const Discord = require('discord.js');


exports.run = (client, message, args) => {
  if (!message.guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")) return message.reply('Gerekli izin yok')
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Duyurmadın ki');
  message.delete();
  const embed = new Discord.RichEmbed();
      embed.setColor('GREEN')
      embed.setDescription("**" + mesaj + "**")
    message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'embed',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
