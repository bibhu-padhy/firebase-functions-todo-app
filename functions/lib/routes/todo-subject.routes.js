"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todo_list_controller_1 = require("../controllers/todo_list.controller");
class TodoSubjectRoutes {
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
exports.TodoSubjectRoutes = TodoSubjectRoutes;
//# sourceMappingURL=todo-subject.routes.js.map