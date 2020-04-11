import * as express from 'express';
import { Users } from '../controllers/users.controller';
// import { AuthorizationMiddleware } from '../middlewares/authorization.middleware';

export class UsersRoute {
    // private authMiddleware: AuthorizationMiddleware = new AuthorizationMiddleware()
    private users: Users = new Users();
    public router: express.Router = express.Router();

    public routes(api: any): void {
        this.router.post('/register', this.users.register);
        this.router.post('/login', this.users.login);
        api.use('', this.router);
    }
}