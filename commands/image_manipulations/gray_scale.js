const commando = require('discord.js-commando');
const Jimp = require("jimp");
class GrayScaleCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'grayscale',
      group: 'image_manipulations',
      memberName: 'grayscale',
      description: 'Turns your avatar into grayscale'
    });
  }

  async run(message, args) {
    var avatarImage = message.author.avatarURL
      Jimp.read(avatarImage, function (err, image) {
        image.greyscale()
        image.write("image.jpg");
        message.channel.sendMessage("Your Grayscale Avatar", {
    file: "image.jpg"
});
});

  }

}
module.exports = GrayScaleCommand;
