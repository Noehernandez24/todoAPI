const CategoriesServices = require("../services/categories.services")


const createCategorie = async (req, res) => {
    try {
        const newCategorie = req.body
        const categorie = await CategoriesServices.create(newCategorie)
        res.status(201).json(categorie)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createCategorie
}