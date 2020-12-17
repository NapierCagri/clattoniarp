const Discord = require('discord.js');
const embed = new Discord.RichEmbed();


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Avatar alınıyor...");

    let mentionedUser = message.mentions.users.first() || message.author;
  
        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor("GREEN")
        .setTitle(mentionedUser.tag + " kişisinin fotoğrafı")
        .setFooter("İsteyen Kişi: " + message.author.tag)
      

        message.channel.send(embed)


    msg.delete();
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'aaaa',
  usage: 'aaaa'
};