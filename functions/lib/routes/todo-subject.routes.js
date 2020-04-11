"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todo_list_controller_1 = require("../controllers/todo_list.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
class TodoSubjectRoutes {
    constructor() {
        this.authMiddleware = new authorization_middleware_1.AuthorizationMiddleware();
        this.todoRoutes = new todo_list_controller_1.TodoListController();
        this.router = express.Router();
    }
    routes(api) {
        this.router.post('/createTodoSubject', this.authMiddleware.verifyToken, this.todoRoutes.createTodoSubject);
        this.router.get('/getTodoSubjectList', this.authMiddleware.verifyToken, this.todoRoutes.getTodoSubjects);
        this.router.put('/editTodoSubjectTitle/:id', this.authMiddleware.verifyToken, this.todoRoutes.editTodoSubject);
        this.router.delete('/deleteTodoSubject/:id', this.authMiddleware.verifyToken, this.todoRoutes.deleteTodoSubject);
        api.use('', this.router);
    }
}
exports.TodoSubjectRoutes = TodoSubjectRoutes;
//# sourceMappingURL=todo-subject.routes.js.map