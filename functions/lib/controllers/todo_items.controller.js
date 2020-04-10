"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_utils_1 = require("../util/admin.utils");
class TodoItemsController {
    constructor() {
        this.createTodoItems = async (req, res) => {
            try {
                const item = req.body.item; // item title from client
                const subjectId = req.params.subjectId; // selected subject Id
                const selectedSubject = await admin_utils_1.db.collection('todo_list')
                    .doc(req.params.subjectId); // getting the selected subject from the collection
                await selectedSubject.collection('todo_items')
                    .add({ item, subjectId }); // in that selected subject add a todo_item
                res.status(201).json({ success: true, message: 'Subject created successfully' }); // if success
            }
            catch (error) {
                res.status(500).json(error); // if there is some error
            }
        };
        this.getTodoItems = async (req, res) => {
            try {
                const todoItemsArr = [];
                const todoitem = await admin_utils_1.db.collection('todo_list')
                    .doc(req.params.subjectId); // selected subject 
                const allSelectedTodoItems = await todoitem.collection('todo_items')
                    .get(); // get the items from the selected subject
                if (allSelectedTodoItems.empty) {
                    res.status(200).json({ success: true, message: 'No data avaiable' });
                }
                else {
                    allSelectedTodoItems.forEach((item) => {
                        todoItemsArr.push({
                            id: item.id,
                            item: item.data().item,
                            subjectId: item.data().subjectId
                        });
                    });
                    res.status(200).send(todoItemsArr); // send items from selected subject
                }
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Refresh the page' });
            }
        };
        this.editTodoItem = async (req, res) => {
            try {
                const item = req.body.item; // client item input
                const selectedSubject = await admin_utils_1.db.collection('todo_list')
                    .doc(req.params.subjectId); // selected subject from the collection
                await selectedSubject.collection('todo_items')
                    .doc(req.params.id) // selected item
                    .set({ item }); // edit the selected item
                res.status(200).json({ success: true, message: 'Item edited successfully' });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Refresh the page' });
            }
        };
        this.deleteTodoItem = async (req, res) => {
            try {
                const selectedSubject = await admin_utils_1.db.collection('todo_list')
                    .doc(req.params.subjectId); // get selected subject
                await selectedSubject.collection('todo_items')
                    .doc(req.params.id) // get the selected item
                    .delete(); // delete seleted item
                res.status(200).json({ success: true, message: 'Item deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ success: false, message: 'Refresh the page' });
            }
        };
    }
}
exports.TodoItemsController = TodoItemsController;
//# sourceMappingURL=todo_items.controller.js.map