const UserServices = require("../services/users.services")

const createUser = async(req, res) =>{
    try {
        const newUser = req.body
        const user = await UserServices.create(newUser)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser
}