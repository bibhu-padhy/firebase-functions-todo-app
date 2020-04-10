"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_utils_1 = require("../util/auth.utils");
class Users {
    constructor() {
        this.auth = auth_utils_1.auth;
        this.register = async (req, res) => {
            const email = req.body.email;
            const password = req.body.password;
            try {
                const user = await this.auth.createUserWithEmailAndPassword(email, password);
                res.send(user);
            }
            catch (error) {
                res.send(error);
            }
        };
        this.login = async (req, res) => {
            const email = req.body.email;
            const password = req.body.password;
            try {
                const user = await this.auth.signInWithEmailAndPassword(email, password);
                res.send(user);
            }
            catch (error) {
                res.send(error);
            }
        };
    }
}
exports.Users = Users;
//# sourceMappingURL=users.controller.js.map