import * as request from 'request';
import { CoreOptions } from 'request';

export class HttpClient {
    public get(uri: string, options?: CoreOptions) {
        return new Promise((resolve: any, reject: any) => {
            request.get(uri, options, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
        });
    }
}
