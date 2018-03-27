import * as builder from 'botbuilder';
import { CHAT_APP_ID, CHAT_APP_PASSWORD } from '../environment/variables';

// Creating a chat connector to Bot Framework Service

export class Bot {
    private connector = new builder.ChatConnector({
        appId: CHAT_APP_ID,
        appPassword: CHAT_APP_PASSWORD,
    });
    private bot = new builder.UniversalBot(this.connector);

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
