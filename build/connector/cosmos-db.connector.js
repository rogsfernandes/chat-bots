"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_azure_1 = require("@sheerun/botbuilder-azure");
const variables_1 = require("../environment/variables");
exports.cosmosDbClient = new botbuilder_azure_1.AzureTableClient(variables_1.COSMOS_DB_COLLECTION, variables_1.COSMOS_DB_ACCOUNT_NAME, variables_1.COSMOS_DB_KEY);
exports.cosmosDbStorage = new botbuilder_azure_1.AzureBotStorage({ gzipData: false }, exports.cosmosDbClient);
