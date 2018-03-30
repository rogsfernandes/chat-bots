import { AzureBotStorage, AzureTableClient } from '@sheerun/botbuilder-azure';
import { COSMOS_DB_ACCOUNT_NAME, COSMOS_DB_COLLECTION, COSMOS_DB_HOST, COSMOS_DB_KEY } from '../environment/variables';

export const cosmosDbClient = new AzureTableClient(COSMOS_DB_COLLECTION, COSMOS_DB_ACCOUNT_NAME, COSMOS_DB_KEY);
export const cosmosDbStorage = new AzureBotStorage({ gzipData: false }, cosmosDbClient);
