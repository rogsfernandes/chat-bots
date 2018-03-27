"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder = require("botbuilder");
var variables_1 = require("../variables");
var qna_connector_1 = require("./qna-connector");
// Creating a chat connector to Bot Framework Service
exports.connector = new builder.ChatConnector({
    appId: variables_1.MICROSOFT_APP_ID,
    appPassword: variables_1.MICROSOFT_APP_PASSWORD,
});
exports.bot = new builder.UniversalBot(exports.connector);
exports.bot.dialog('/', qna_connector_1.basicQnAMakerDialog);
