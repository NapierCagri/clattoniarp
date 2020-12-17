const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports.run = async (bot, message, args, client, config) => {
 let timeout = 604800000
 // 7 days in milliseconds, change if you'd like.
    let amount = 250
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let weekly = await db.fetch(`weekly_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        //message.channel.send(`Haftalığını zaten almışsın. ${time.days} gün ${time.hours} saat ${time.minutes} dakika ${time.seconds} saniye sonra tekrar dene.`)
     let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("GREEN")
    .setDescription(`**Haftalığını alman için kalan süre:**`)
    .addField(`Gün: `, time.days)
    .addField(`Saat: `, time.hours)
    .addField(`Dakika: `, time.minutes)
    .addField(`Saniye: `, time.seconds)
    message.channel.send(embed)
    } else {
   
      
    message.channel.send("Haftalık 250 doların ve 5 Clattor'un yatırıldı.")
    db.add(`money_${message.author.id}`, amount)
    db.add(`altin_${message.author.id}`, 5)
    db.set(`weekly_${message.author.id}`, Date.now())
        
    }


}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "haftalık",
  description: 'Kişi hakkında bilgi verir.',
  usage: '!bilgi <kişi>'
};
