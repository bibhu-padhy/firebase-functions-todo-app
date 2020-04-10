
import { Request, Response } from 'express'
import { db } from '../util/admin.utils';

interface todo_list_model {
    subjectId: string,
    title: string
}


export class TodoListController {
    public createTodoSubject = async (req: Request, res: Response) => {

        try {
            const subjectTitle = req.body.subjectTitle;
            await db.collection('todo_list')
                .add({ subjectTitle });
            res.status(201).json({ success: true, message: 'Subject created successfully' })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public getTodoSubjects = async (req: Request, res: Response) => {
        try {
            const todoListArr: Array<todo_list_model> = [];
            const todoList = await db.collection('todo_list')
                .get();
            todoList.forEach((TD) => {
                todoListArr.push({
                    subjectId: TD.id,
                    title: TD.data().subjectTitle
                })
            })
            res.status(200).send(todoListArr)

        } catch (error) {
            res.status(500).json({ success: false, message: 'Refresh the page' })
        }
    }

    public editTodoSubject = async (req: Request, res: Response) => {
        try {
            const subjectTitle = req.body.subjectTitle;
            await db.collection('todo_list')
                .doc(req.params.id)
                .set({ subjectTitle });
            res.status(200).json({ success: true, message: 'Subject edited successfully' })
        } catch (error) {
            res.status(500).json({ success: false, message: 'Refresh the page' })
        }
    }

    public deleteTodoSubject = async (req: Request, res: Response) => {
        try {
            await db.collection('todo_list')
                .doc(req.params.id)
                .delete();
            res.status(200).json({ success: true, message: 'Subject deleted successfully' })
        } catch (error) {
            res.status(500).json({ success: false, message: 'Refresh the page' })
        }
    }
}

