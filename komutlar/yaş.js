const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    if (!args[0]) return message.reply('Lütfen kaç yaşında olduğunuzu giriniz.')
    if (isNaN(args[0])) return message.reply('Bu geçerli bir sayı değil.')

    let user = message.mentions.users.first() || message.author;
    message.channel.send('<@' + user.id + "> kişisinin yaşı "+ args[0] + ' olarak ayarlandı.')
     const aa = parseInt(args[0])
    db.set(`yas_${user.id}`, aa)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yaş',
  description: 'Çözdüğünüz soruları ekler',
  usage: 'soruekle [soru sayısı]'
};
