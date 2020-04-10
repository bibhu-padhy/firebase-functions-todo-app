"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todo_list_controller_1 = require("../controllers/todo_list.controller");
class TodoRoutes {
    constructor() {
        this.todoRoutes = new todo_list_controller_1.TodoListController();
        this.router = express.Router();
    }
    routes(api) {
        this.router.post('/createTodoSubject', this.todoRoutes.createTodoSubject);
        this.router.get('/getTodoSubjectList', this.todoRoutes.getTodoSubjects);
        this.router.put('/editTodoSubjectTitle/:id', this.todoRoutes.editTodoSubject);
        this.router.delete('/deleteTodoSubject/:id', this.todoRoutes.deleteTodoSubject);
        api.use('', this.router);
    }
}
exports.TodoRoutes = TodoRoutes;
//# sourceMappingURL=todo_list.routes.js.map