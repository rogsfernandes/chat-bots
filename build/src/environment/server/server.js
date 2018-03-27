"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
var variables_1 = require("../variables");
var BotServer = /** @class */ (function () {
    /**
     * Implementation
     */
    function BotServer() {
        // Creating restify server
        this.server = restify.createServer();
    }
    BotServer.prototype.start = function () {
        var _this = this;
        this.server.listen(variables_1.PORT, function () {
            // tslint:disable-next-line:no-console
            console.log(_this.server.name + " listening to " + _this.server.url);
        });
    };
    BotServer.prototype.post = function (endpoint, handler) {
        this.server.post('/api/messages', handler);
    };
    return BotServer;
}());
exports.BotServer = BotServer;
