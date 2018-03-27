import * as bunyan from 'bunyan';

process.on('unhandledRejection', (error) => {
    bunyan
        .createLogger({ name: 'TopLevenExceptionLogger' })
        .error(error.message);
});
