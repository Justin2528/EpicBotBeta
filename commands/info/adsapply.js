const Discord = require('discord.js');

module.exports = {
    name: "adsapply",
    category: "info",
    description: "get ur ads APPLY",

    run: async (client, message, args,ops,guildconf,dsettings) => {
      


//   const msg = await message.author.send("Please chose a username... Will expire in 10 minutes... or type cancel to cancel the something.").then(q => q.delete(600000))
// const filter = collected => collected.author.id === message.author.id;
//   const collected = await msg.channel.awaitMessages(filter, {
//     max: 1,
//     time: 600000
//   }).catch(err => {
//     message.author.send("Cancelled...").then(r => r.delete(600000));
//     console.log("Time exceeded. Message await cancelled.");
//     collected.delete(600000)
//   });
    
// if(collected.first().content === 'cancel') return message.reply('Canceled');
// console.log(collected)
        if(args[0] === "format"){
          return message.channel.send("Format:\nWhat are you advertising:\nWhy are you advertising:\nWhy should we accept this form but not the others:\nAnything else we should know:")
        }

const msg = await message.author.send('Hey! Be sure to use the format! go to servers and type epic>adsapply format. Also the apply will end in 10 minutes if you didn\'t say anything. ALSO if you used the wrong format, we will give you a warning. 3 warns = 14 days blacklist from EpicBot. 5 warns = 1 month blacklist. 7 warns = perm blacklist.');
const filter = collected => collected.author.id === message.author.id;
const collector = msg.channel.createMessageCollector(filter, {
    max: 1,
    time: 600000,
})

collector.on('collect', m => {
	
   message.author.send("Thank you for applying. We'll review this application asap.")
         const cnl = client.channels.get('671678458941800451');
   cnl.send("someone applied!\n```" + m.content + `\`\`\` \nby ${message.author} and here id ${message.author.id}`)
});


  
  
  }
}
           
           
