const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, client) => {

   let user = message.mentions.users.first() || message.author;


    let bal = await db.fetch(`su_${user.id}`);
    if (bal === null) bal = 0;
   
    
    
    const embed = new Discord.RichEmbed()
      .setAuthor(user.username, user.avatarURL)
      .setTitle("CLATTONIA MARKET")
      .setColor('GREEN')
      .setDescription("-Su: 1 Dolar \n-")
      
      message.reply(embed)
    
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "market",
  description: "Kişi hakkında bilgi verir.",
  usage: "!bilgi <kişi>"
};
