import * as restify from 'restify';
import { PORT } from '../variables';

export class BotServer {
    /**
     * Properties
     */
    private server: restify.Server;

    /**
     * Implementation
     */
    constructor() {
        // Creating restify server
        this.server = restify.createServer();
    }

    public start() {
        this.server.listen(PORT, () => {
            // tslint:disable-next-line:no-console
            console.log(`${this.server.name} listening to ${this.server.url}`);
        });

    }

    public post(endpoint: string, handler: restify.RequestHandlerType) {
        this.server.post('/api/messages', handler);
    }
}
