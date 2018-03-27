import { AzureBotStorage, DocumentDbClient, IDocumentDbOptions } from '@sheerun/botbuilder-azure';
import { COSMOS_DB_COLLECTION, COSMOS_DB_HOST, COSMOS_DB_KEY, COSMOS_DB_NAME } from '../environment/variables';

const documentDbOptions: IDocumentDbOptions = {
    collection: COSMOS_DB_COLLECTION,
    database: COSMOS_DB_NAME,
    host: COSMOS_DB_HOST,
    masterKey: COSMOS_DB_KEY,
};

export const cosmosDbClient = new DocumentDbClient(documentDbOptions);
export const cosmosDbStorage = new AzureBotStorage({ gzipData: false }, cosmosDbClient);
