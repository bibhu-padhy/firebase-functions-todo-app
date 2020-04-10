
import * as express from 'express'
import { TodoListController } from '../controllers/todo_list.controller'

export class TodoSubjectRoutes {
    public todoRoutes: TodoListController = new TodoListController();
    public router: express.Router = express.Router();

    public routes(api: any): void {
        this.router.post('/createTodoSubject', this.todoRoutes.createTodoSubject);
        this.router.get('/getTodoSubjectList', this.todoRoutes.getTodoSubjects);
        this.router.put('/editTodoSubjectTitle/:id', this.todoRoutes.editTodoSubject);
        this.router.delete('/deleteTodoSubject/:id', this.todoRoutes.deleteTodoSubject);
        api.use('', this.router);
    }
}


