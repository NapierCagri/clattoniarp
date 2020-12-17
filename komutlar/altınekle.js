const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    if (!args[1]) return message.reply('Lütfen kaç Clattor ekleyeceğimi giriniz.')
    if (isNaN(args[1])) return message.reply('Bu geçerli bir sayı değil.')

    let user = message.mentions.users.first()
    message.channel.send('<@' + user.id + "> kişisine "+ args[0] + ' Clattor eklendi.')
     const aa = parseInt(args[1])
    db.add(`altin_${user.id}`, aa)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'clatekle',
  description: 'Çözdüğünüz soruları ekler',
  usage: 'soruekle [soru sayısı]'
};
