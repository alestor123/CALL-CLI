var Conf = require('conf'),
options = require('minimist')(process.argv.slice(2)),
config = new Conf(),
twilio = require('twilio'),
message = options.m || options.message || 'No Message',
audio = options.a || options.audio;
