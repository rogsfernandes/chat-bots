"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_connector_1 = require("./build/connector/bot-connector");
const luis_connector_1 = require("./build/connector/luis-connector");
const server_1 = require("./build/infrastructure/server");
const luis = new luis_connector_1.Luis();
const bot = new bot_connector_1.Bot();
const server = new server_1.BotServer();
const intents = bot.getLuisIntents(luis.LuisModelUrl);
intents
    .matches('apresentacao', (session, args) => {
    session.send('Bom dia, boa tarde e boa noite! Me informe seu ID de usuário para que eu faça recomendações de comida para você.');
})
    .matches('cumprimento', (session, args) => {
    session.send('Olá! Tudo bem? Sou um bot de recomendação de comidas.');
})
    .matches('recomendar-comida', (session, args) => {
    session.send('Me fale sobre o que você gosta de comer que te faço uma recomendação');
})
    .matches('sobre', (session, args) => {
    session.send('Diga o que quer saber sobre mim, o seu Bot de Recomendação de Comidas.');
})
    .onDefault((session, args) => {
    session.send('Não consegui entender o que quis dizer. Posso te ajudar fazendo uma recomendação de comida?');
});
bot.createNewDialog('/', intents);
server.start();
server.post('/api/messages', bot.Connector.listen());
