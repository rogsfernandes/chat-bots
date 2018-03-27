"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = process.env.PORT || 3978;
// Bot framework access
exports.MICROSOFT_APP_ID = process.env.MICROSOFT_APP_ID;
exports.MICROSOFT_APP_PASSWORD = process.env.MICROSOFT_APP_PASSWORD;
// QnAMaker access
exports.QNA_SUBSCRIPTION_KEY = process.env.QNA_SUBS_KEY || 'a86cff8c8d5b4d6f89b19d9dfdfcd065';
exports.QNA_KNOWLEDGE_BASE_ID = process.env.QNA_BASE_ID || '729351c1-7b25-4273-8a45-3d12de3e3544';
