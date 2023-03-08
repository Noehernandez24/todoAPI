const Categories = require("./categories.model")
const Todos = require("./todos.model")
const Users = require("./users.model")

const initModels = () => {
    // Relation USER / TODO
    Users.hasMany(Todos, {foreignKey: 'userId'})
    Todos.belongsTo(Users, {foreignKey: 'userId'})

    // Relation TODO / CATEGORY
    Categories.hasMany(Todos, {foreignKey: 'categoryId'})
    Todos.belongsTo(Categories, {foreignKey: 'categoryId'})
}

module.exports = initModels