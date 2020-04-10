"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const config = require("./config.util");
admin.initializeApp({
    credential: admin.credential.cert(config.key),
    databaseURL: "https://mora-backend.firebaseio.com"
});
exports.db = admin.firestore();
//# sourceMappingURL=admin.utils.js.map