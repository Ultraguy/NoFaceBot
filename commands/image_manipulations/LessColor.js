const commando = require('discord.js-commando');
const Jimp = require("jimp");
class lesscolorCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'lesscolor',
      group: 'image_manipulations',
      memberName: 'lesscolor',
      description: 'Makes your avatar have less color'
    });
  }

  async run(message, args) {
    var avatarImage = message.author.avatarURL
    console.log(message.author)
    Jimp.read(avatarImage, function(err, image) {
      image.posterize(5);
      image.write("image.jpg");
      message.channel.sendMessage("Your lesscolored Avatar", {
        file: "image.jpg"
      });
    });

  }

}
module.exports = lesscolorCommand;
