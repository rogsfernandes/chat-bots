"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_connector_1 = require("./build/connector/bot-connector");
const luis_connector_1 = require("./build/connector/luis-connector");
const server_1 = require("./build/infrastructure/server");
const about_intent_handler_1 = require("./build/intent-handler/about-intent.handler");
const luis = new luis_connector_1.Luis();
const bot = new bot_connector_1.Bot();
const server = new server_1.BotServer();
const intents = bot.getLuisIntents(luis.LuisModelUrl);
intents
    .matches('apresentacao', (session, args) => {
        if (args.entities && args.entities.length) {
            session.send(`Olá, usuário **${args.entities[0].entity}**, seja bem vindo!`);
        }
        else {
            session.send('Olá! Me informe seu ID de usuário para que eu te reconheça.');
        }
    })
    .matches('cumprimento', (session, args) => {
        session.send('Olá! Tudo bem? Sou o PizzaBot, e eu amo pizzas! (•ω•)');
    })
    .matches('recomendar-comida', (session, args) => {
        if (args.entities && args.entities.length) {
            let text = 'Esse é o seu pedido?\n\n';
            args.entities.forEach((entity, index, array) => {
                text += ` * ${entity.type}: ${entity.entity}`;
            });
            session.send(text);
        }
        else {
            session.send('Me fale de qual pizza voçê gosta que eu anoto o pedido!');
        }
    })
    .matches('sobre', (session, args) => {
        return new about_intent_handler_1.AboutHandler(session).handleIntent(session, args);
    })
    .onDefault((session, args) => {
        session.send('Não consegui entender o que quis dizer. Posso te ajudar fazendo uma recomendação de comida?');
    });
bot.createNewDialog('/', intents);
server.start();
server.post('/api/messages', bot.Connector.listen());
