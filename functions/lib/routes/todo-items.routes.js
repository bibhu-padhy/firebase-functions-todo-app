"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todo_items_controller_1 = require("../controllers/todo_items.controller");
class TodoItemRoutes {
    constructor() {
        this.todoItemRoutes = new todo_items_controller_1.TodoItemsController();
        this.router = express.Router();
    }
    routes(api) {
        this.router.post('/createTodoItems/:subjectId', this.todoItemRoutes.createTodoItems);
        this.router.get('/getTodoItems/:subjectId', this.todoItemRoutes.getTodoItems);
        this.router.put('/subject/:subjectId/editItem/:id', this.todoItemRoutes.editTodoItem);
        this.router.delete('/subject/:subjectId/deleteItem/:id', this.todoItemRoutes.deleteTodoItem);
        api.use('', this.router);
    }
}
exports.TodoItemRoutes = TodoItemRoutes;
//# sourceMappingURL=todo-items.routes.js.map