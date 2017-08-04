const commando = require('discord.js-commando');
const math = require('mathjs-expression-parser')

class MathCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'math',
      group: 'misc',
      memberName: 'math',
      description: 'Solves math for you'
    });
  }

  async run(message, args) {
    try {
      var expr = args;
      var answer = math.eval(expr);
      message.channel.send("Query: " + '`' + args + '`');
      message.channel.send("Answer: " + '`' + answer + '`')
    } catch (SyntaxError) {
      message.reply("You put a non number value which cannot be calculated!")
    }

  }


}
module.exports = MathCommand;
