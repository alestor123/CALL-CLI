#!/usr/bin/env node

var Conf = require('conf'),
options = require('minimist')(process.argv.slice(2)),
config = new Conf(),
chalk = require('chalk'),
inId = options.i || options.id || process.env.SID,
inNum = options.cn || options.cnumber || process.env.NUM,
inKey = options.k || options.key || process.env.KEY,
twilio = require('twilio'),
cnumber = config.get('twilionum'),
number = options.n || options.number,
message = options.m || options.message,
id = config.get('twilioid'),
key = config.get('twiliokey');
if(inId&&inKey){
    console.log('Id : '+inId+'Key: '+inKey + 'Number : ' + inNum )
    config.set('twilionum',inNum);
    config.set('twilioid',inId);
    config.set('twiliokey',inKey);
    process.exit(0)
}
else if(check()) call()

function check(){
if(id&&key&&cnumber) return true
else {
console.log(chalk.red('Please set id and key and number'))
return false}}

function call(){
var client = twilio(id,key);
ml = `<Response><Say>${message || 'No Message'} </Say></Response>`;
client.calls
      .create({
        twiml: ml,
         to: number ,
         from: cnumber
})
.then(call => console.log(`Call Id : ${call.sid}`));
console.log(`Number ${number} From : ${cnumber} Message : ${message || 'No Message'}`)
}