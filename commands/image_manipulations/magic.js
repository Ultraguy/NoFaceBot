const commando = require('discord.js-commando');
const Jimp = require("jimp");
class MagicCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'magic',
      group: 'image_manipulations',
      memberName: 'magic',
      description: 'Adds magic to your avatar'
    });
  }

  async run(message, args) {
    var avatarImage = message.author.avatarURL
    Jimp.read(avatarImage, function(err, image) {
      image.invert();
      image.write("image.jpg");
      message.channel.sendMessage("Your Magical Avatar", {
        file: "image.jpg"
      });
    });

  }

}
module.exports = MagicCommand;
