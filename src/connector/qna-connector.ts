/**
 * REQUIRES
 * @description Using CommomJS because this modules code lacks type declaration
 */
// tslint:disable-next-line:no-var-requires
const builderCognitiveServices = require('botbuilder-cognitiveservices');

import * as builder from 'botbuilder';
import { QNA_KNOWLEDGE_BASE_ID, QNA_SUBSCRIPTION_KEY } from '../environment/variables';

const recognizer = new builderCognitiveServices.QnAMakerRecognizer({
    knowledgeBaseId: QNA_KNOWLEDGE_BASE_ID,
    subscriptionKey: QNA_SUBSCRIPTION_KEY,
});

export const basicQnAMakerDialog = new builderCognitiveServices.QnAMakerDialog({
    defaultMessage: 'Não consegui encontrar algo para te dizer. Tente novamente.',
    qnaThreshold: 0.3,
    recognizers: [recognizer],
});
