'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.on('message', (payload) => {
    const text = payload.message.text;
    console.log(`The user said: ${text}`);
});

bot.hear(['hello', 'hi', 'hey', 'coucou'], (payload, chat) => {
    chat.say('Hello human !')
});

bot.start(80);