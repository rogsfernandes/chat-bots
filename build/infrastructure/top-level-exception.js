"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require("bunyan");
process.on('unhandledRejection', (error) => {
    bunyan
        .createLogger({ name: 'TopLevenExceptionLogger' })
        .error(error.message);
});
