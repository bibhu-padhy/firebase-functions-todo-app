import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser'
import { TodoSubjectRoutes } from './routes/todo-subject.routes'
import { TodoItemRoutes } from './routes/todo-items.routes'
import { UsersRoute } from './routes/user.routes'

class Api {

    public app: express.Application;

    constructor() {
        this.app = express()
        this.app.use(bodyParser.json())
        new TodoSubjectRoutes().routes(this.app);
        new TodoItemRoutes().routes(this.app);
        new UsersRoute().routes(this.app)
    }
}

exports.api = functions.https.onRequest(new Api().app)
