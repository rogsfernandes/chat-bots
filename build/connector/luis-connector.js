"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = require("querystring");
const variables_1 = require("../environment/variables");
const http_client_1 = require("../infrastructure/http-client");
class Luis {
    constructor() {
        this.LUIS_BASE_URL = `${variables_1.LUIS_HOST}${variables_1.LUIS_ENDPOINT}${variables_1.LUIS_APP_ID}?${querystring_1.stringify({ 'subscription-key': variables_1.LUIS_SUBSCRIPTION_KEY })}`;
        this.httpClient = new http_client_1.HttpClient();
    }
    getIntentsByHttp(utterance, timezoneOffsetArg = 0, verboseArg = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = {
                q: utterance,
                timezoneOffset: timezoneOffsetArg,
                verbose: verboseArg,
            };
            const luisRequest = `${this.LUIS_BASE_URL}${querystring_1.stringify(queryParams)}`;
            return yield this.httpClient.get(luisRequest);
        });
    }
    get LuisModelUrl() {
        return this.LUIS_BASE_URL;
    }
}
exports.Luis = Luis;
