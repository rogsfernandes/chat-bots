"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require("bunyan");
const restify = require("restify");
const variables_1 = require("../environment/variables");
class BotServer {
    /**
     * Implementation
     */
    constructor() {
        this.logger = bunyan.createLogger({ name: 'ServerLogger' });
        // Creating restify server
        this.server = restify.createServer();
    }
    start() {
        this.server.listen(variables_1.PORT, () => {
            this.logger.info(`${this.server.name} listening to ${this.server.url}`);
        });
    }
    post(endpoint, handler) {
        this.server.post('/api/messages', handler);
    }
}
exports.BotServer = BotServer;
