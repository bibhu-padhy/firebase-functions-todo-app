"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_controller_1 = require("../controllers/users.controller");
class UsersRoute {
    constructor() {
        this.todoRoutes = new users_controller_1.Users();
        this.router = express.Router();
    }
    routes(api) {
        this.router.post('/register', this.todoRoutes.register);
        this.router.post('/login', this.todoRoutes.login);
        api.use('', this.router);
    }
}
exports.UsersRoute = UsersRoute;
//# sourceMappingURL=user.routes.js.map