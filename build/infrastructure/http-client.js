"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class HttpClient {
    get(uri, options) {
        return new Promise((resolve, reject) => {
            request.get(uri, options, (error, response, body) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(response);
                }
            });
        });
    }
}
exports.HttpClient = HttpClient;
