"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
const variables_1 = require("../environment/variables");
const cosmos_db_connector_1 = require("./cosmos-db.connector");
// Creating a chat connector to Bot Framework Service
class Bot {
    constructor() {
        this.connector = new builder.ChatConnector({
            appId: variables_1.MICROSOFT_APP_ID,
            appPassword: variables_1.MICROSOFT_APP_PASSWORD,
        });
        this.bot = new builder
            .UniversalBot(this.connector)
            .set('storage', cosmos_db_connector_1.cosmosDbStorage);
    }
    get Connector() {
        return this.connector;
    }
    createNewDialog(dialogName, dialog) {
        return this.bot.dialog(dialogName, dialog);
    }
    getLuisIntents(LuisModelUrl) {
        const recognizer = new builder.LuisRecognizer(LuisModelUrl);
        return new builder.IntentDialog({ recognizers: [recognizer] });
    }
}
exports.Bot = Bot;
