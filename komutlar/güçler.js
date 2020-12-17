const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require('moment');

exports.run = (client, message, params) => {
   
      
    
      let embed2 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("KONDÜSYON")
        .setDescription("🌟 Kuvvet \n🌟 Uçuş \n🌟 Duyu \n🌟 Dayanıklılık \n🌟 Zeka \n🌟 Çeviklik")
        
       message.channel.send(embed2)
  let embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("ELEMENTLER")
        .setDescription("🌟 Toprak \n🌟 Ateş \n🌟 Su \n🌟 Hava \n🌟 Buz \n🌟 Elektrik \n🌟 Metal \n🌟 Bitki \n🌟 Hayvan")
        
       message.channel.send(embed)
  let embed3 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("ZİHİN")
        .setDescription("🌟 Telekinezi \n🌟 Telepati \n🌟 Teknopati \n🌟 Işınlanma \n🌟 Görünmezlik \n🌟 Şifa \n🌟 Meta")
        
       message.channel.send(embed3)
  let embed4 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("ADAPTASYON")
        .setDescription("🌟 Eseneklik \n🌟 Biçim Değiştirme \n   ▶️Şekil Değiştirme \n   ▶️Parça Değiştirme \n🌟 Fazlanma \n🌟 Absorbsiyon \n   ▶️Madde Absorbsiyonu \n   ▶️Enerji Absorbsiyonu \n🌟 Boyut Değiştirme \n   ▶️Devleşme \n   ▶️Küçülme")
        
       message.channel.send(embed4)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güçler',
  description: 'Kişi hakkında bilgi verir.',
  usage: '!bilgi <kişi>'
};