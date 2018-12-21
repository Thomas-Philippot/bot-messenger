'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: 'EAAQ1fkSBxtUBAL8oe6rgRFC5hcecA7UEeZAXhmZB4BIxQ6NuhGpBZC7QmjNCFRZAOjGc3jfbvatTI1evDPBo8OSorpRSumwZC4FJg8BQkeK7ar9vwCraU7gMcnVIBMEW2WsgoHFUKEmIvDdQrTKpZCF8K4nwxXytdGyVWfevgwh27WnI5lhaCh',
    verifyToken: 'Binouze',
    appSecret: 'ed7d0c538b808934968037d4a8bbe977'
});

bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    console.log(`The user said: ${text}`);
});

bot.hear(['hello', 'hi', 'hey'], (payload, chat) => {
    chat.say('Hello human !')
});

bot.start();