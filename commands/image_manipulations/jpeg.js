const commando = require('discord.js-commando');
const Jimp = require("jimp");
class NeedsMoreJpegCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'needmorejpeg',
      group: 'image_manipulations',
      memberName: 'needmorejpeg',
      description: 'Your avatar needs more jpeg'
    });
  }

  async run(message, args) {
    var avatarImage = message.author.avatarURL
      Jimp.read(avatarImage, function (err, image) {
        image.quality(100)
        image.write("image.jpg");
        message.channel.sendMessage("Your JpegTM Avatar", {
    file: "image.jpg"
});
});

  }

}
module.exports = NeedsMoreJpegCommand;
