"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
class AboutHandler {
    constructor(session) {
        this.name = 'sobre';
        this.presentationCard = new builder.HeroCard(session)
            .title('FoodBot')
            .subtitle('Sou o Bot de Recomendação de Comidas')
            .text('Sou um chat bot que consegue anotar seus pedidos e recomendar o que comer com base no que você gosta.')
            .images([
            builder.CardImage.create(session, 'https://d30y9cdsu7xlg0.cloudfront.net/png/815603-200.png'),
        ])
            .buttons([
            builder.CardAction.openUrl(session, 'https://www.google.com.br/search?q=chat+bot&oq=chat+bot&aqs=chrome..69i57j0j69i60l3j0.994j0j7&sourceid=chrome&ie=UTF-8', 'Leia mais'),
        ]);
    }
    handleIntent(session, args) {
        const msg = new builder.Message(session).addAttachment(this.presentationCard);
        return session.send(msg);
    }
}
exports.AboutHandler = AboutHandler;
