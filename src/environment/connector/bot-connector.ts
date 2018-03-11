import * as builder from 'botbuilder';
import { MICROSOFT_APP_ID, MICROSOFT_APP_PASSWORD } from '../variables';
import { basicQnAMakerDialog } from './qna-connector';

// Creating a chat connector to Bot Framework Service
export const connector = new builder.ChatConnector({
    appId: MICROSOFT_APP_ID,
    appPassword: MICROSOFT_APP_PASSWORD,
});

export const bot = new builder.UniversalBot(connector);

bot.dialog('/', basicQnAMakerDialog);
