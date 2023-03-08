const Categories = require("../models/categories.model")
const Todos = require("../models/todos.model")

class TodosServices {

    static async get(id){
        try {
            const result = await Todos.findAll({
                where: {
                    userId: id
                },
                attributes: ['id', 'title', 'description', 'status'],
                include: {
                    model: Categories,
                    attributes: ['name']
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(newTodo){
        try {
            const result = Todos.create(newTodo)
            return result 
        } catch (error) {
            throw error
        }
    }

    static async changeStatus(id, newStatus){
        try {
            const result = await Todos.update(newStatus, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id){
        try {
            const result = await Todos.destroy({
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = TodosServices

