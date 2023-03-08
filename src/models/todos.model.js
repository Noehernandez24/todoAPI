const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Todos = db.define('todos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
    }
})

module.exports = Todos