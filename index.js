'use strict';
const BootBot = require('bootbot');

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
    chat.say({
        text: 'La pression, notre grande passion !  🍻',
        quickReplies: ['La bière du mois','Toutes nos bières']
    })
});

bot.hear('La bière du mois', (payload, chat) => {
    chat.say('PALM EICHBAUM ROYALE :\n' +
            '\nEichbaum Hefeweizen Hell. Bière blanche allemande non filtrée aux arômes fruités'
            ).then(() => {
        chat.sendAttachment('image', 'https://scontent-frt3-2.cdninstagram.com/vp/3683dd078fd65d7dc0c700b352a898a3/5CBAB596/t51.2885-15/e35/47487921_220402265501882_60774496771215156_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com').then(() => {
            chat.say({
                text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
                quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
            })
        })
    })
});

bot.hear('Toutes nos bières', (payload, chat) => {
    chat.sendAttachment('image', 'https://images.pexels.com/photos/1267682/pexels-photo-1267682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940').then(() => {
        chat.say('Toutes nos bières içi : https://www.lecroquebedaine.fr/bierescroques/').then(() => {
            chat.say({
                text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
                quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
            })
        })
    })
});

bot.hear('Infos pratiques', (payload, chat) => {
    chat.say({
        text: 'Que souhaites-tu savoir ? 🤔',
        quickReplies: ['Y accéder', 'Vous appeler', 'Questions spcéciales']
    });
});

bot.hear('Y accéder', (payload, chat) => {
    chat.say({
        text: 'Par quel moyen veut tu venir ?',
        quickReplies: ['🚋 Tramway', '🚲 Vélo-Bicloo', '🚗 Voiture']
    })
});


bot.hear(['🚋 Tramway', 'Tramway'], (payload, chat) => {
    chat.say('Ligne 2 : Place du cirque\nLigne 3 : Bretagne').then(() => {
        chat.say({
            text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
            quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
        })
    })
});

bot.hear(['🚲 Vélo-Bicloo', 'Vélo', 'Bicloo'], (payload, chat) => {
    chat.say('Station N°6 : Place du cirque\nStation N°13 : Bretagne sud\nStation N°8 : Boucherie').then(() => {
        chat.say({
            text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
            quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
        })
    })
});

bot.hear(['🚗 Voiture', 'Voiture'], (payload, chat) => {
    chat.say({
        text: 'Ma voiture ?',
        quickReplies: ['Ma voiture', 'En marguerite']
    })
});

bot.hear(['Ma voiture'], (payload, chat) => {
    chat.say('Parking Tour Bretagne\nParking Talensac\nParking Place Viarme').then(() => {
        chat.say({
            text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
            quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
        })
    })
});

bot.hear(['En marguerite'], (payload, chat) => {
    chat.say('Station : Arche Sèche\nStation : Bretagne\nStation : Cinquante Otages').then(() => {
        chat.say({
            text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
            quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
        })
    })
});

bot.hear('Vous appeler', (payload, chat) => {
    chat.say('+33 2 40 48 95 95')
});

bot.hear('Questions spcéciales', (payload, chat) => {
    chat.say('Pose nous t\'a question, elle sera lu le plus vite possible')
});

bot.hear('Evénements', (payload, chat) => {
    chat.say('Prends ton agendas et note notre planning du mois ! ☺');
    chat.sendAttachment('image', 'http://img.over-blog-kiwi.com/0/95/30/84/20180626/ob_22e7c5_dgnuvauwaaeaobx.jpg').then(() => {
        chat.say({
            text: 'Est-ce que j\'ai répondu à toutes tes questions ?',
            quickReplies: ['Oui, merci ! 😋', 'Non ... 😔']
        })
    })
});

bot.start(process.env.PORT);
