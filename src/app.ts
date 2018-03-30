import * as builder from 'botbuilder';
import { Bot } from './connector/bot-connector';
import { Luis } from './connector/luis-connector';
import { basicQnAMakerDialog } from './connector/qna-connector';
import * as luisConfig from './environment/luis-config';
import { MICROSOFT_APP_ID, MICROSOFT_APP_PASSWORD } from './environment/variables';
import { BotServer } from './infrastructure/server';
import { AboutHandler } from './intent-handler/about-intent.handler';

const luis = new Luis();
const bot = new Bot();
const server = new BotServer();
const intents = bot.getLuisIntents(luis.LuisModelUrl);

intents
    .matches('apresentacao', (session, args) => {
        if (args.entities && args.entities.length) {
            session.send(`Olá, usuário **${args.entities[0].entity}**, seja bem vindo!`);
        } else {
            session.send('Olá! Me informe seu ID de usuário para que eu te reconheça.');
        }
    })
    .matches('cumprimento', (session, args) => {
        session.send('Olá! Tudo bem? Sou o PizzaBot, e eu amo pizzas! (•ω•)');
    })
    .matches('recomendar-comida', (session, args) => {
        if (args.entities && args.entities.length) {
            const pizza = args.entities.find((entity: any) => entity.entity === 'pizza');
            if (pizza) {
                const flavor = args.entities.find((entity: any) => entity.type === 'sabor').entity;
                const pizzaCard = new builder.HeroCard(session)
                    .title(`**Pizza de ${flavor}**`)
                    .subtitle('Saiba mais da pizza que você mais gosta!')
                    .text('Link da Pizza que você escolheu:')
                    .buttons([
                        builder.CardAction.openUrl(session, `https://www.google.com.br/search?q=pizza+de+${flavor}&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjysNjIhJXaAhWEHpAKHWulCBMQ_AUICigB&biw=1366&bih=637`, 'Saiba mais!'),
                    ]);
                const msg = new builder.Message(session).addAttachment(pizzaCard);
                session.send(msg);
            } else {
                let text = 'Esse é o seu pedido!\n\n';
                args.entities.forEach((entity: any, index: any, array: any) => {
                    text += ` * ${entity.type}: ${entity.entity} \n\n`;
                });

                session.send(text);
            }
        } else {
            session.send('Me fale de qual pizza voçê gosta que eu anoto o pedido!');
        }
    })
    .matches('sobre', (session, args) => {
        return new AboutHandler(session).handleIntent(session, args);
    })
    .onDefault((session, args) => {
        session.send('Não consegui entender o que quis dizer. Gostaria de saber mais da pizza que gosta? \n\nMe fale qual sua pizza favorita que mando link!');
    });

bot.createNewDialog('/', intents);
server.start();
server.post('/api/messages', bot.Connector.listen());
