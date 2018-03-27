export const PORT = process.env.PORT || 3978;

// Bot framework access
export const CHAT_APP_ID = process.env.CHAT_APP_ID;
export const CHAT_APP_PASSWORD = process.env.CHAT_APP_PASSWORD;

// QnAMaker access
export const QNA_SUBSCRIPTION_KEY = process.env.QNA_SUBS_KEY || 'a86cff8c8d5b4d6f89b19d9dfdfcd065';
export const QNA_KNOWLEDGE_BASE_ID = process.env.QNA_BASE_ID || '729351c1-7b25-4273-8a45-3d12de3e3544';

// LUIS access
export const LUIS_SUBSCRIPTION_KEY = process.env.LUIS_SUBSCRIPTION_KEY || 'f3e707616dcb4db180f42bf8023f96d5';
export const LUIS_APP_ID = process.env.LUIS_APP_ID || '63c88a43-0a71-43d5-b9b8-6adb694be5a6';
export const LUIS_HOST = process.env.LUIS_HOST || 'https://westus.api.cognitive.microsoft.com/';
export const LUIS_ENDPOINT = process.env.LUIS_ENDPOINT || 'luis/v2.0/apps/';
