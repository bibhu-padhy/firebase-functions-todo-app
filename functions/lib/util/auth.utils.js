"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase");
const config_util_1 = require("./config.util");
firebase.initializeApp(config_util_1.key);
exports.auth = firebase.auth();
//# sourceMappingURL=auth.utils.js.map