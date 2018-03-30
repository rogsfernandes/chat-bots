"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
class AboutHandler {
    constructor(session) {
        this.name = 'sobre';
        this.presentationCard = new builder.HeroCard(session)
            .title('# PizzaBot')
            .subtitle('Sou o Bot que ama Pizzas!')
            .text('Gostaria de pedir uma pizza? Eu consigo te mandar links da pizza que você gosta!')
            .images([
                builder.CardImage.create(session, 'http://www.delonghi.com/Global/recipes/multifry/3.jpg'),
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'https://www.google.com.br/search?q=pizza&source=lnms&sa=X&ved=0ahUKEwj02biHgpXaAhWBEJAKHfE8BsUQ_AUICSgA&biw=1366&bih=637&dpr=1', 'Leia mais'),
            ]);
    }
    handleIntent(session, args) {
        const msg = new builder.Message(session).addAttachment(this.presentationCard);
        return session.send(msg);
    }
}
exports.AboutHandler = AboutHandler;
