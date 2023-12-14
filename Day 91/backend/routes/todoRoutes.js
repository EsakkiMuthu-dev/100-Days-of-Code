import todoController from '../controllers/todoController';
const express = require('express');
const router = express.Router();
router.get('/',todoController.getAllTodos);
router.get('/:id',todoController.getTodo);
router.put('/:id',todoController.updateTodo);
router.delete('/:id',todoController.deleteTodo);
router.post('/add',todoController.createTodo);
export default router;