"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AboutHandler {
    constructor() {
        this.name = 'sobre';
    }
    handleIntent(session) {
        return session.send('');
    }
}
exports.AboutHandler = AboutHandler;
