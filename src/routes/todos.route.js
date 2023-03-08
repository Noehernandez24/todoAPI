const {Router} = require('express');
const { createTodo, getUserTodo, changeStatusTodo, deleteTodo } = require('../controllers/todos.controller');
const router = Router();

router.get('/api/v1/todo/user/:id', getUserTodo)

router.post('/api/v1/todo', createTodo)

router.put('/api/v1/todo/:id', changeStatusTodo)

router.delete('/api/v1/todo/:id', deleteTodo)

module.exports = router