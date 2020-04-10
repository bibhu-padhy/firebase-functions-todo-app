import * as express from 'express';
import { Users } from '../controllers/users.controller';

export class UsersRoute {
    public todoRoutes: Users = new Users();
    public router: express.Router = express.Router();

    public routes(api: any): void {
        this.router.post('/register', this.todoRoutes.register);
        this.router.post('/login', this.todoRoutes.login);
        api.use('', this.router);
    }
}