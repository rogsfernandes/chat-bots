import * as builder from 'botbuilder';

export class AboutHandler {
    private name: string = 'sobre';
    public handleIntent(session: builder.Session) {
        return session.send('');
    }
}
