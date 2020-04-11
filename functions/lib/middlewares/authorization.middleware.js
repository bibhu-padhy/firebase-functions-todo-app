"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const admin_utils_1 = require("../util/admin.utils");
class AuthorizationMiddleware {
    constructor() {
        this.admin = admin.auth();
        this.verifyToken = async (req, res, next) => {
            var _a;
            try {
                // first get the token from headers
                const idToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
                // here we are getting the decoded token
                const decodedToken = await this.admin.verifyIdToken(`${idToken}`);
                const getUserFromDb = await admin_utils_1.db.collection('users_list')
                    .where('userId', '==', decodedToken.uid)
                    .limit(1)
                    .get();
                req.user = decodedToken;
                req.user.userName = getUserFromDb.docs[0].data().userName;
                next();
            }
            catch (error) {
                if (error.code === "auth/id-token-expired") {
                    res.status(500).json({ success: false, message: 'Auth token has expired' });
                }
                else if (error.code === "auth/argument-error") {
                    res.status(500).json({ success: false, message: 'Auth token is invalid' });
                }
            }
        };
    }
}
exports.AuthorizationMiddleware = AuthorizationMiddleware;
//# sourceMappingURL=authorization.middleware.js.map