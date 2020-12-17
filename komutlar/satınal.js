const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, client) => {
  let esy = args.slice(0).join(' ');
  let user = message.author;
  if (esy.length < 1) return message.reply('Ne satın alacağını belirtmen lazım.') ;
  if (esy.toLowerCase() ===  "su") {
   db.add(`su_${user.id}`, 1)
    
  
    db.subtract(`money_${user.id}`, 1)
    let bal = await db.fetch(`money_${user.id}`);
    let bal2 = await db.fetch(`altin_${user.id}`);
    let bal3 = await db.fetch(`su_${user.id}`);
    
    if (bal === null) bal = 0;
   if (bal2 === null) bal2 = 0;
       if (bal3 === null) bal = 0;
    const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(user.username, user.avatarURL)
      .setColor('GREEN')
      .setDescription("Başarıyla 5 dolara bir şişe su satın aldın.")
      .addField('Yeni Doların:', bal + " 💵")
      .addField('Yeni Clattor\'un:', bal2 + " 🪙")
      .addField('Yeni Suyun:', bal3 + " tane")
      message.reply(kullanicibilgimk)
    
  } 
  else {
    
    
  }
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["buy"],
  permLevel: 0
};

exports.help = {
  name: "satınal",
  description: "Kişi hakkında bilgi verir.",
  usage: "!bilgi <kişi>"
};
