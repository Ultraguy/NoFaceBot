const commando = require('discord.js-commando');
var lenny = "( ͡° ͜ʖ ͡°)"
class LennyCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'lenny',
      group: 'fun',
      memberName: 'lenny',
      description: '( ͡° ͜ʖ ͡°)'
    });
  }

  async run(message, args) {
    message.reply(lenny)


  }


}
module.exports = LennyCommand;
