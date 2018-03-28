"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_connector_1 = require("./src/connector/bot-connector");
const luis_connector_1 = require("./src/connector/luis-connector");
const server_1 = require("./src/infrastructure/server");
const luis = new luis_connector_1.Luis();
const bot = new bot_connector_1.Bot();
const server = new server_1.BotServer();
const intents = bot.getLuisIntents(luis.LuisModelUrl);
intents
    .matches('apresentacao', (session, args) => {
    if (args.entities && args.entities.length) {
        session.send(`Olá, usuário ${args.entities[0].entity}, seja bem vindo!`);
    }
    else {
        session.send('Bom dia, boa tarde e boa noite! Me informe seu ID de usuário para que eu faça recomendações de comida para você.');
    }
})
    .matches('cumprimento', (session, args) => {
    session.send('Olá! Tudo bem? Sou um bot de recomendação de comidas.');
})
    .matches('recomendar-comida', (session, args) => {
    if (args.entities && args.entities.length) {
        let text = `Esse é o seu pedido?`;
        args.entities.forEach((entity, index, array) => {
            text += ` * ${entity.type}, ${entity.entity}*`;
        });
        session.send(text);
    }
    else {
        session.send('Me fale sobre o que você gosta de comer que te faço uma recomendação');
    }
})
    .matches('sobre', (session, args) => {
    session.send('Eu sou seu Bot de Recomendação de Comidas.');
})
    .onDefault((session, args) => {
    session.send('Não consegui entender o que quis dizer. Posso te ajudar fazendo uma recomendação de comida?');
});
bot.createNewDialog('/', intents);
server.start();
server.post('/api/messages', bot.Connector.listen());
