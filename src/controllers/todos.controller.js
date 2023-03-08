const TodosServices = require("../services/todos.services")

const getUserTodo = async (req, res) => {
    try {
        const {id} = req.params
        const userTodo = await TodosServices.get(id)
        res.json(userTodo)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createTodo = async (req, res) => {
    try {
        const newTodo = req.body
        const todo = await TodosServices.create(newTodo)
        res.status(202).json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
}

const changeStatusTodo = async (req, res) => {
    try {
        const {id} = req.params
        const newStatus = req.body
        await TodosServices.changeStatus(id, newStatus)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        await TodosServices.delete(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createTodo,
    getUserTodo,
    changeStatusTodo,
    deleteTodo
}