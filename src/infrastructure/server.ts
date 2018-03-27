import * as bunyan from 'bunyan';
import * as restify from 'restify';
import { PORT } from '../environment/variables';

export class BotServer {
    /**
     * Properties
     */
    private server: restify.Server;
    private logger = bunyan.createLogger({ name: 'ServerLogger' });

    /**
     * Implementation
     */
    constructor() {
        // Creating restify server
        this.server = restify.createServer();
    }

    public start() {
        this.server.listen(PORT, () => {
            this.logger.info(`${this.server.name} listening to ${this.server.url}`);
        });
    }

    public post(endpoint: string, handler: restify.RequestHandlerType) {
        this.server.post('/api/messages', handler);
    }
}
