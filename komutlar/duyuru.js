const Discord = require('discord.js');


exports.run = (client, message, args) => {
  if (!message.guild.members.get(client.user.id).hasPermission("ADMINISTRATOR")) return message.reply('Gerekli izin yok')
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Duyurmadın ki');
  const embed = new Discord.RichEmbed();
      embed.setColor('GREEN')
      embed.setTitle('DUYURU')
      embed.setDescription(mesaj)
    var generalChannel = client.channels.get("763694210166816778")
    generalChannel.send("@everyone", {embed: embed} );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur', 'duyuru'],
  permLevel: 0
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
