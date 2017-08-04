const commando = require('discord.js-commando');
const moment = require('moment');
const fs = require("fs");

function menToID(theID) {
  result = theID.replace("<", "");
  result = result.replace(">", "");
  result = result.replace("@", "");
  result = result.replace("!", "");
  return result;
};
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
class LoveCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'love',
      group: 'fun',
      memberName: 'love',
      description: 'Gives a love point'
    });
  }

  async run(message, args) {
    var reciver = menToID(args)
    if (!points[message.author.id]) points[message.author.id] = {
      points: 0,
      time: 0,
      loveleft: 2
    };
    if (message.author.id == reciver) {
      message.reply("You cannot give love to yourself")

    } else if (args == "" || args == " ") {
      message.channel.sendMessage("Correct Syntax: ")
      message.channel.sendMessage("`!love @user`")
    } else {
      if (!points[reciver]) points[reciver] = {
        points: 0,
        time: 0,
        loveleft: 2
      };
      if (points[message.author.time == "0"] || parseInt(points[message.author.id].loveleft) > 0) {
        points[message.author.id].loveleft--;
        points[reciver].points++;
        message.reply("You gave 1 Love Point to, " + args + " They now have " + points[reciver].points)
        points[message.author.id].time = Math.floor(Date.now() / 1000);

      } else if (Math.floor(Date.now() / 1000) - points[message.author.id].time > 86400 || parseInt(points[message.author.id].loveleft) > 0) {
        points[message.author.id].loveleft--;
        points[reciver].points++;
        message.reply("You gave 1 Love Point to, " + args + " They now have " + points[reciver].points)
        points[message.author.id].time = Math.floor(Date.now() / 1000);

      } else if (Math.floor(Date.now() / 1000) - points[message.author.id].time < 86400) {
        var timeleft = parseInt(Math.floor(Date.now() / 1000) - points[message.author.id].time)
        timeleft = Math.floor(timeleft / 3600)
        timeleft = 24 - timeleft
        message.reply("You must wait at least 24 hours before giving another lovepoint. You have " + timeleft + " Hours left")


      }



      // And then, we save the edited file.
      fs.writeFile("./points.json", JSON.stringify(points), (err) => {
        if (err) console.error(err)

      });

    }

  }


}
module.exports = LoveCommand;
