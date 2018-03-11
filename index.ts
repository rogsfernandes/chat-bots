import * as builder from 'botbuilder';
import { bot, connector } from './src/environment/connector/bot-connector';
import { basicQnAMakerDialog } from './src/environment/connector/qna-connector';
import { BotServer } from './src/environment/server/server';
import {
    MICROSOFT_APP_ID,
    MICROSOFT_APP_PASSWORD,
} from './src/environment/variables';

// Creating BotServer to handle requests
const server = new BotServer();
server.start();
server.post('/api/messages', connector.listen());
