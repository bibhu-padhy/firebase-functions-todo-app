"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const todo_subject_routes_1 = require("./routes/todo-subject.routes");
const todo_items_routes_1 = require("./routes/todo-items.routes");
const user_routes_1 = require("./routes/user.routes");
class Api {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        new todo_subject_routes_1.TodoSubjectRoutes().routes(this.app);
        new todo_items_routes_1.TodoItemRoutes().routes(this.app);
        new user_routes_1.UsersRoute().routes(this.app);
    }
}
exports.api = functions.https.onRequest(new Api().app);
//# sourceMappingURL=index.js.map