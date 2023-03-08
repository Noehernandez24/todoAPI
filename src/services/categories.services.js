const Categories = require("../models/categories.model")

class CategoriesServices {
    static async create(newCategorie){
        try {
            const result = await Categories.create(newCategorie)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoriesServices