import * as builder from 'botbuilder';
import { MICROSOFT_APP_ID, MICROSOFT_APP_PASSWORD } from '../environment/variables';
import { cosmosDbStorage } from './cosmos-db.connector';

// Creating a chat connector to Bot Framework Service

export class Bot {
    private connector: builder.ChatConnector;
    private bot: builder.UniversalBot;

    constructor() {
        this.connector = new builder.ChatConnector({
            appId: MICROSOFT_APP_ID,
            appPassword: MICROSOFT_APP_PASSWORD,
        });
        this.bot = new builder
            .UniversalBot(this.connector)
            .set('storage', cosmosDbStorage);
    }

    get Connector() {
        return this.connector;
    }

    public createNewDialog(dialogName: string, dialog: builder.Dialog) {
        return this.bot.dialog(dialogName, dialog);
    }

    public getLuisIntents(LuisModelUrl: string) {
        const recognizer = new builder.LuisRecognizer(LuisModelUrl);
        return new builder.IntentDialog({ recognizers: [recognizer] });
    }
}
