const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {


    let user = message.mentions.users.first()

    db.add(`money_${user.id}`, 1000)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yeni',
  description: 'Çözdüğünüz soruları ekler',
  usage: 'soruekle [soru sayısı]'
};
