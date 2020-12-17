const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let gucc = args.slice(1).join(' ');
    if (!args[1]) return message.reply('Lütfen hikayenizi giriniz.')
   // if (isNaN(args[0])) return message.reply('Bu geçerli bir sayı değil.')
    let user = message.mentions.users.first()
    if ( parseInt[gucc.length] < 1800 ) return message.reply("Lütfen hikayenizi kısaltın.")
    message.channel.send('Hikaye eklendi')
    
    db.set(`hikaye_${user.id}`, gucc)
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hikaye',
  description: 'Çözdüğünüz soruları ekler',
  usage: 'soruekle [soru sayısı]'
};
