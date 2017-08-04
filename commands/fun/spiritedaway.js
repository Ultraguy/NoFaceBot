const commando = require('discord.js-commando');
const Jimp = require("jimp");
var gifArray = ["https://cdn.discordapp.com/attachments/339098849018904577/341001530545012739/wave_of_feels-18739.gif", "https://cdn.discordapp.com/attachments/339098849018904577/341001578930634752/tumblr_my57wjooSa1qitjclo1_500.gif", "https://cdn.discordapp.com/attachments/339098849018904577/341001685411430401/tumblr_n1k416YnUM1tq9yyqo1_500.gif"]
class SpiritedAwayCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'spiritedaway',
      group: 'fun',
      memberName: 'spiritedaway',
      description: 'Gives you a random spirited away gif'
    });
  }

  async run(message, args) {
    var avatarImage = gifArray[Math.floor(Math.random() * 2)]
    //      Jimp.read(avatarImage, function ( err, image) {
    //        image.write("gif.gif");
    message.channel.sendMessage("Your Spirited Away Gif", )
    message.channel.sendMessage(avatarImage)
    //    file: "gif.gif"
    //});
  };

}

module.exports = SpiritedAwayCommand;
