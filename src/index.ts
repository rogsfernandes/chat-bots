import * as builder from 'botbuilder';
import { Bot } from './connector/bot-connector';
import { Luis } from './connector/luis-connector';
import { basicQnAMakerDialog } from './connector/qna-connector';
import * as luisConfig from './environment/luis-config';
import { CHAT_APP_ID, CHAT_APP_PASSWORD } from './environment/variables';
import { BotServer } from './infrastructure/server';

const luis = new Luis();
const bot = new Bot();
const server = new BotServer();
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
