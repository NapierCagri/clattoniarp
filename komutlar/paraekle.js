const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    if (!args[1]) return message.reply('Lütfen kaç dolar ekleyeceğimi giriniz.')
    if (isNaN(args[1])) return message.reply('Bu geçerli bir sayı değil.')

    let user = message.mentions.users.first()
    message.channel.send('<@' + user.id + "> kişisine "+ args[0] + ' dolar eklendi.')
     const aa = parseInt(args[1])
    db.add(`money_${user.id}`, aa)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'paraekle',
  description: 'Çözdüğünüz soruları ekler',
  usage: 'soruekle [soru sayısı]'
};
