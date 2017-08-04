const commando = require('discord.js-commando');
const client = new commando.Client({
  commandPrefix: '!',
  owner: '131203605981036545',
  unknownCommandResponse: false
});
client.forceFetchUsers;
const Jimp = require("jimp");
const math = require('mathjs-expression-parser')
const moment = require('moment');
var jsonfile = require('jsonfile')


client.registry.registerGroup('random', 'Random')
client.registry.registerGroup('fun', 'Fun')
client.registry.registerGroup('image_manipulations', 'Avatar Manipulations')
client.registry.registerGroup('misc', 'Misc')
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('ready', () => {
  console.log('I am ready!');
});


client.registry.registerDefaults();
client.login('');
