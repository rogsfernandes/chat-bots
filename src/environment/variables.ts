export const PORT = process.env.PORT || 3978;

// Bot framework access
export const MICROSOFT_APP_ID = process.env.MICROSOFT_APP_ID || 'e6991630-4f00-4436-ab20-3d0c04798dee';
export const MICROSOFT_APP_PASSWORD = process.env.MICROSOFT_APP_PASSWORD || 'Iv[Z.OD_>dEaAD@a';

// QnAMaker access
export const QNA_SUBSCRIPTION_KEY = process.env.QNA_SUBS_KEY || 'a86cff8c8d5b4d6f89b19d9dfdfcd065';
export const QNA_KNOWLEDGE_BASE_ID = process.env.QNA_BASE_ID || '729351c1-7b25-4273-8a45-3d12de3e3544';

// LUIS access
export const LUIS_SUBSCRIPTION_KEY = process.env.LUIS_SUBSCRIPTION_KEY || 'f3e707616dcb4db180f42bf8023f96d5';
export const LUIS_APP_ID = process.env.LUIS_APP_ID || '63c88a43-0a71-43d5-b9b8-6adb694be5a6';
export const LUIS_HOST = process.env.LUIS_HOST || 'https://westus.api.cognitive.microsoft.com/';
export const LUIS_ENDPOINT = process.env.LUIS_ENDPOINT || 'luis/v2.0/apps/';

// CosmosDB access
export const COSMOS_DB_KEY = process.env.COSMOS_DB_KEY || 'ftWCyEuohfhS13eqMp9UUMOMCG0XcKlTeVJ99q0rgVwjafjyryRmEURSeLpw8KM3WEDrmgj5xcDeu7sHKu0Elw==';
export const COSMOS_DB_HOST = process.env.COSMOS_DB_HOST || 'https://pizzabotdb.documents.azure.com:443/';
export const COSMOS_DB_NAME = process.env.COSMOS_DB_NAME || 'botdocs';
export const COSMOS_DB_COLLECTION = process.env.COSMOS_DB_COLLECTION || 'botdata';
