const commando = require('discord.js-commando');
const Jimp = require("jimp");
class NormalCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'normal',
      group: 'image_manipulations',
      memberName: 'normal',
      description: 'Makes your image more "Normal"'
    });
  }

  async run(message, args) {
    var avatarImage = message.author.avatarURL
      Jimp.read(avatarImage, function (err, image) {
        image.write("image.jpg");
        message.channel.sendMessage("Your normal Avatar", {
    file: "image.jpg"
});
});

  }

}
module.exports = NormalCommand;
