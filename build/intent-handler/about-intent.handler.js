"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
class AboutHandler {
    constructor(session) {
        this.name = 'sobre';
        this.presentationCard = new builder.HeroCard(session)
            .title('PizzaBot')
            .subtitle('Sou o PizzaBot, o bot que ama pizzas! ')
            .text('Posso fazer essas coisas: \n\n* Te falar sobre a história das pizzas; \n\n* Te mandar links sobre a pizza que você mais gosta. \n\n A história da pizza começou há 6 mil anos com os egípcios. Acredita-se que eles foram os primeiros a misturar farinha com água. \n\n\n\nOutros afirmam que os pioneiros são os gregos, que faziam a massas à base de farinha de trigo, arroz ou grão-de-bico e as assavam em tijolos quentes. A novidade foi parar na península da Etrúria, na Itália. Era um alimento de pobres do Sul da Itália. Mas foram os napolitanos que passaram a acrescentar molho de tomate e orégano à massa, que era dobrada ao meio e devorada como se fosse um sanduíche. Quem tinha um pouco mais de dinheiro colocava queijo, pedaços de linguiça ou ovos por cima.')
            .images([
                builder.CardImage.create(session, 'http://www.delonghi.com/Global/recipes/multifry/3.jpg'),
            ])
            .buttons([
                builder.CardAction.openUrl(session, 'http://casadapizza.com.br/web/a-historia-da-pizza/', 'Leia Mais'),
            ]);
    }
    handleIntent(session, args) {
        const msg = new builder.Message(session).addAttachment(this.presentationCard);
        return session.send(msg);
    }
}
exports.AboutHandler = AboutHandler;
