'use strict';
const BootBot = require('bootbot');
require('dotenv').config();

const bot = new BootBot({
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appSecret: process.env.APP_SECRET
});

bot.setGetStartedButton((payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say({
        text: 'Bonjour, ' + user.first_name +  '\n' +
            '\n' +
            'Je m\'appelle Balthazar et suis ravie de t\'accueillir sur notre page Croque Bedaine Nantes. 😇\n' +
            '\n' +
            'Que souhaites-tu savoir ? \n' +
            '\n' +
            '- Balthazar 🍺',
        quickReplies: ['Vos prestations', 'Infos pratiques']
        });
    });
});

bot.hear(['Non ... 😔', 'non', 'Non'], (payload, chat) => {
    chat.getUserProfile().then((user) => {
        chat.say({
            text: 'Que veux-tu savoir d\'autre, ' + user.first_name + ' ? 😇',
            quickReplies: ['Vos prestations', 'Infos pratiques']
        });
    });
});

bot.hear('Vos prestations', (payload, chat) => {
    chat.say({
        text: 'Une petite soif, un petit creux ou juste une envie de sortir ? 😇',
        quickReplies: ['Croques Monsieur', 'Bières', 'Evénements']
    });
});

bot.hear('Croques Monsieur', (payload, chat) => {
    chat.say({
        text: 'Ou tu croques ou j’te croque ! 😏',
        quickReplies: ['Le croque du mois', 'Tous nos croques']
    })
});

bot.hear('Le croque du mois', (payload, chat) => {
    chat.say('Le Montagnard : ');
    chat.sendAttachment('image', 'https://static.cuisineaz.com/400x320/i15000-croque-monsieur-a-la-bechamel.jpg').then(() => {
        chat.say({
            text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
            quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
        })
    })
});

bot.hear('Oui, merci ! 😋', (payload, chat) => {
    chat.say('A très vite !! 😀');
    chat.sendAttachment('image', 'https://media.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif')
});

bot.hear('Tous nos croques', (payload, chat) => {
    chat.sendAttachment('image', 'https://www.metro.ca/userfiles/image/recipes/croque-monsieur-jambon-et-fromage-10592.jpg').then(() => {
        chat.say('Tous nos croques içi : https://www.lecroquebedaine.fr/bierescroques/').then(() => {
            chat.say({
                text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
                quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
            })
        })
    })
});

bot.hear('Bières', (payload, chat) => {

});

bot.hear('Evénements', (payload, chat) => {

});

bot.hear('Infos pratiques', (payload, chat) => {
    chat.say({
        text: '',
        quickReplies: ['', 'Infos ']
    });
});

bot.start();