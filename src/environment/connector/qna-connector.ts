/**
 * REQUIRES
 * @description Using CommomJS because this modules code lacks type declaration
 */
// tslint:disable-next-line:no-var-requires
const builderCognitiveServices = require('botbuilder-cognitiveservices');

import * as builder from 'botbuilder';
import { QNA_KNOWLEDGE_BASE_ID, QNA_SUBSCRIPTION_KEY } from '../variables';

const recognizer = new builderCognitiveServices.QnAMakerRecognizer({
    knowledgeBaseId: QNA_KNOWLEDGE_BASE_ID,
    subscriptionKey: QNA_SUBSCRIPTION_KEY,
});

export const basicQnAMakerDialog = new builderCognitiveServices.QnAMakerDialog({
    defaultMessage: 'Não consegui encontrar algo para te dizer. Tente novamente.',
    qnaThreshold: 0.3,
    recognizers: [recognizer],
});

// basicQnAMakerDialog.respondFromQnAMakerResult = (session: any, qnaMakerResult: any) => {
//     // Save the question
//     const question = session.message.text;
//     session.conversationData.userQuestion = question;
//     // boolean to check if the result is formatted for a card
//     const isCardFormat = qnaMakerResult.answers[0].answer.includes(';');
//     if (!isCardFormat) {
//         // Not semi colon delimited, send a normal text response 
//         session.send(qnaMakerResult.answers[0].answer);
//     } else if (qnaMakerResult.answers && qnaMakerResult.score >= 0.5) {

//         const qnaAnswer = qnaMakerResult.answers[0].answer;

//         const qnaAnswerData = qnaAnswer.split(';');
//         const title = qnaAnswerData[0];
//         const description = qnaAnswerData[1];
//         const url = qnaAnswerData[2];
//         const imageURL = qnaAnswerData[3];

//         const msg = new builder.Message(session);
//         msg.attachments([
//             new builder.HeroCard(session)
//                 .title(title)
//                 .subtitle(description)
//                 .images([builder.CardImage.create(session, imageURL)])
//                 .buttons([
//                     builder.CardAction.openUrl(session, url, 'Learn More'),
//                 ]),
//         ]);
//         session.send(msg).endDialog();
//     }
// };
