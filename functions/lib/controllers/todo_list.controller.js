"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_utils_1 = require("../util/admin.utils");
class TodoListController {
    constructor() {
        this.createTodoSubject = async (req, res) => {
            try {
                const subjectTitle = req.body.subjectTitle;
                await admin_utils_1.db.collection('todo_list')
                    .add({ subjectTitle });
                res.status(201).json({ success: true, message: 'Subject created successfully' });
            }
            catch (error) {
                res.status(500).json(error);
            }
        };
        this.getTodoSubjects = async (req, res) => {
            try {
                const todoListArr = [];
                const todoList = await admin_utils_1.db.collection('todo_list')
                    .get();
                todoList.forEach((TD) => {
                    todoListArr.push({
                        subjectId: TD.id,
                        title: TD.data().subjectTitle
                    });
                });
                res.status(200).send(todoListArr);
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Refresh the page' });
            }
        };
        this.editTodoSubject = async (req, res) => {
            try {
                const subjectTitle = req.body.subjectTitle;
                await admin_utils_1.db.collection('todo_list')
                    .doc(req.params.id)
                    .set({ subjectTitle });
                res.status(200).json({ success: true, message: 'Subject edited successfully' });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Refresh the page' });
            }
        };
        this.deleteTodoSubject = async (req, res) => {
            try {
                await admin_utils_1.db.collection('todo_list')
                    .doc(req.params.id)
                    .delete();
                res.status(200).json({ success: true, message: 'Subject deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Refresh the page' });
            }
        };
    }
}
exports.TodoListController = TodoListController;
//# sourceMappingURL=todo_list.controller.js.map