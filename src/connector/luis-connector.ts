import * as builder from 'botbuilder';
import { stringify } from 'querystring';
import { LUIS_APP_ID, LUIS_ENDPOINT, LUIS_HOST, LUIS_SUBSCRIPTION_KEY } from '../environment/variables';
import { HttpClient } from '../infrastructure/http-client';

export class Luis {
    private httpClient: HttpClient;
    private LUIS_BASE_URL: string = `${LUIS_HOST}${LUIS_ENDPOINT}${LUIS_APP_ID}?${stringify({ 'subscription-key': LUIS_SUBSCRIPTION_KEY })}`;

    constructor() {
        this.httpClient = new HttpClient();
    }

    public async getIntentsByHttp(utterance: string, timezoneOffsetArg: number = 0, verboseArg: boolean = true) {
        const queryParams = {
            q: utterance,
            timezoneOffset: timezoneOffsetArg,
            verbose: verboseArg,
        };

        const luisRequest = `${this.LUIS_BASE_URL}${stringify(queryParams)}`;

        return await this.httpClient.get(luisRequest);
    }

    get LuisModelUrl() {
        return this.LUIS_BASE_URL;
    }
}
