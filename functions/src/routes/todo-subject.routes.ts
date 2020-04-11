
import * as express from 'express'
import { TodoListController } from '../controllers/todo_list.controller'
import { AuthorizationMiddleware } from '../middlewares/authorization.middleware';

export class TodoSubjectRoutes {
    private authMiddleware: AuthorizationMiddleware = new AuthorizationMiddleware()
    public todoRoutes: TodoListController = new TodoListController();
    public router: express.Router = express.Router();

    public routes(api: any): void {
        this.router.post('/createTodoSubject', this.authMiddleware.verifyToken, this.todoRoutes.createTodoSubject);
        this.router.get('/getTodoSubjectList', this.authMiddleware.verifyToken, this.todoRoutes.getTodoSubjects);
        this.router.put('/editTodoSubjectTitle/:id', this.authMiddleware.verifyToken, this.todoRoutes.editTodoSubject);
        this.router.delete('/deleteTodoSubject/:id', this.authMiddleware.verifyToken, this.todoRoutes.deleteTodoSubject);
        api.use('', this.router);
    }
}


