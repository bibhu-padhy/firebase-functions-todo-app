"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_controller_1 = require("../controllers/users.controller");
// import { AuthorizationMiddleware } from '../middlewares/authorization.middleware';
class UsersRoute {
    constructor() {
        // private authMiddleware: AuthorizationMiddleware = new AuthorizationMiddleware()
        this.users = new users_controller_1.Users();
        this.router = express.Router();
    }
    routes(api) {
        this.router.post('/register', this.users.register);
        this.router.post('/login', this.users.login);
        api.use('', this.router);
    }
}
exports.UsersRoute = UsersRoute;
//# sourceMappingURL=user.routes.js.map