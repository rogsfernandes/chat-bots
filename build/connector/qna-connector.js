"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * REQUIRES
 * @description Using CommomJS because this modules code lacks type declaration
 */
// tslint:disable-next-line:no-var-requires
const builderCognitiveServices = require('botbuilder-cognitiveservices');
const variables_1 = require("../environment/variables");
const recognizer = new builderCognitiveServices.QnAMakerRecognizer({
    knowledgeBaseId: variables_1.QNA_KNOWLEDGE_BASE_ID,
    subscriptionKey: variables_1.QNA_SUBSCRIPTION_KEY,
});
exports.basicQnAMakerDialog = new builderCognitiveServices.QnAMakerDialog({
    defaultMessage: 'Não consegui encontrar algo para te dizer. Tente novamente.',
    qnaThreshold: 0.3,
    recognizers: [recognizer],
});
