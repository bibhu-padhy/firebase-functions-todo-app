"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_utils_1 = require("../util/auth.utils");
const admin_utils_1 = require("../util/admin.utils");
class Users {
    constructor() {
        this.auth = auth_utils_1.auth;
        this.register = async (req, res) => {
            var _a;
            const email = req.body.email;
            const password = req.body.password;
            const userName = req.body.userName;
            try {
                const user = await this.auth // creating a user with email and password
                    .createUserWithEmailAndPassword(email, password);
                await admin_utils_1.db.collection('users_list') // saving users info in the users_list collection
                    .add({ email, userName, userId: (_a = user.user) === null || _a === void 0 ? void 0 : _a.uid });
                res.status(201).json({ success: true, message: 'User has created successfully' });
            }
            catch (error) {
                res.send(error);
            }
        };
        this.login = async (req, res) => {
            var _a;
            const email = req.body.email;
            const password = req.body.password;
            try {
                const user = await this.auth.signInWithEmailAndPassword(email, password);
                const token = await ((_a = user.user) === null || _a === void 0 ? void 0 : _a.getIdToken());
                res.status(201).json({ token: token, message: 'authenticated user' });
            }
            catch (error) {
                res.send(error);
            }
        };
    }
}
exports.Users = Users;
//# sourceMappingURL=users.controller.js.map