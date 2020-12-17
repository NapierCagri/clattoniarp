const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args, client) => {
let user = message.mentions.users.first() || message.author;
  let kisi = message.guild.members.get(user.id);
     let bal = await db.fetch(`money_${user.id}`);
    let bal2 = await db.fetch(`altin_${user.id}`);
    if (bal === null) bal = 0;
   if (bal2 === null) bal2 = 0;
    const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(kisi.displayName, user.avatarURL)
      .setColor('GREEN')
      .addField('Dolar:', bal + " 💵")
      .addField('Clattor:', bal2 + " 🪙")
      message.reply(kullanicibilgimk)


}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bakiye",
  description: 'Kişi hakkında bilgi verir.',
  usage: '!bilgi <kişi>'
};
