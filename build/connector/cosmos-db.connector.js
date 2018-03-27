"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_azure_1 = require("@sheerun/botbuilder-azure");
const variables_1 = require("../environment/variables");
const documentDbOptions = {
    collection: variables_1.COSMOS_DB_COLLECTION,
    database: variables_1.COSMOS_DB_NAME,
    host: variables_1.COSMOS_DB_HOST,
    masterKey: variables_1.COSMOS_DB_KEY,
};
exports.cosmosDbClient = new botbuilder_azure_1.DocumentDbClient(documentDbOptions);
exports.cosmosDbStorage = new botbuilder_azure_1.AzureBotStorage({ gzipData: false }, exports.cosmosDbClient);
