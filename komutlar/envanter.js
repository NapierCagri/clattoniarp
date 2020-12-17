const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, client) => {

   let user = message.mentions.users.first() || message.author;
let kisi = message.guild.members.get(user.id);

    let bal = await db.fetch(`su_${user.id}`);
    if (bal === null) bal = 0;
   
    
    
    const embed = new Discord.RichEmbed()
      .setAuthor(kisi.displayName, user.avatarURL)
      .setColor('GREEN')
      .addField('Su:', bal + " tane")
      
      message.reply(embed)
    
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["inv", "inventory", "env"],
  permLevel: 0
};

exports.help = {
  name: "envanter",
  description: "Kişi hakkında bilgi verir.",
  usage: "!bilgi <kişi>"
};
