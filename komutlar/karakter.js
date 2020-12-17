const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let gucc = args.slice(1).join(' ');
    if (!args[1]) return message.reply('Lütfen karakterinizi giriniz.')
   // if (isNaN(args[0])) return message.reply('Bu geçerli bir sayı değil.')
    let user = message.mentions.users.first()
  
    message.channel.send('Karakter eklendi')
    
    db.set(`karakter_${user.id}`, gucc)
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'karakter',
  description: 'Çözdüğünüz soruları ekler',
  usage: 'soruekle [soru sayısı]'
};
