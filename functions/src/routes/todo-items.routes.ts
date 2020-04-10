
import * as express from 'express'
import { TodoItemsController } from '../controllers/todo_items.controller'

export class TodoItemRoutes {
    public todoItemRoutes: TodoItemsController = new TodoItemsController();
    public router: express.Router = express.Router();

    public routes(api: any): void {
        this.router.post('/createTodoItems/:subjectId', this.todoItemRoutes.createTodoItems);
        this.router.get('/getTodoItems/:subjectId', this.todoItemRoutes.getTodoItems);
        this.router.put('/subject/:subjectId/editItem/:id', this.todoItemRoutes.editTodoItem);
        this.router.delete('/subject/:subjectId/deleteItem/:id', this.todoItemRoutes.deleteTodoItem);
        api.use('', this.router);
    }
}


