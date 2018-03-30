"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = process.env.PORT || 3978;
// Bot framework access
exports.MICROSOFT_APP_ID = process.env.MICROSOFT_APP_ID || 'e6991630-4f00-4436-ab20-3d0c04798dee';
exports.MICROSOFT_APP_PASSWORD = process.env.MICROSOFT_APP_PASSWORD || 'Iv[Z.OD_>dEaAD@a';
// QnAMaker access
exports.QNA_SUBSCRIPTION_KEY = process.env.QNA_SUBS_KEY || 'a86cff8c8d5b4d6f89b19d9dfdfcd065';
exports.QNA_KNOWLEDGE_BASE_ID = process.env.QNA_BASE_ID || '729351c1-7b25-4273-8a45-3d12de3e3544';
// LUIS access
exports.LUIS_SUBSCRIPTION_KEY = process.env.LUIS_SUBSCRIPTION_KEY || 'f3e707616dcb4db180f42bf8023f96d5';
exports.LUIS_APP_ID = process.env.LUIS_APP_ID || '63c88a43-0a71-43d5-b9b8-6adb694be5a6';
exports.LUIS_HOST = process.env.LUIS_HOST || 'https://westus.api.cognitive.microsoft.com/';
exports.LUIS_ENDPOINT = process.env.LUIS_ENDPOINT || 'luis/v2.0/apps/';
// CosmosDB access
exports.COSMOS_DB_KEY = process.env.COSMOS_DB_KEY || 'anyM57WMPBfwxoB5wRuEUOs7IqMc07wREOVo0rposIwvEsEVAWkukDto2L0DQhs9S6Kx248NlsRmSsvOVHw2sA==';
exports.COSMOS_DB_HOST = process.env.COSMOS_DB_HOST || 'https://pizzabot.table.cosmosdb.azure.com:443/';
exports.COSMOS_DB_ACCOUNT_NAME = process.env.COSMOS_DB_NAME || 'pizzabot';
exports.COSMOS_DB_COLLECTION = process.env.COSMOS_DB_COLLECTION || 'botdata';
