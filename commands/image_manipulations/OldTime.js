const commando = require('discord.js-commando');
const Jimp = require("jimp");
class OldTimeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'oldtime',
      group: 'image_manipulations',
      memberName: 'oldtime',
      description: 'Makes your avatar a photo from long ago.'
    });
  }

  async run(message, args) {
    var avatarImage = message.author.avatarURL
      Jimp.read(avatarImage, function (err, image) {
        image.sepia();
        image.sepia();
        image.write("image.jpg");
        message.channel.sendMessage("Your Old Timey Avatar", {
    file: "image.jpg"
});
});

  }

}
module.exports = OldTimeCommand;
