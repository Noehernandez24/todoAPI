const Users = require("../models/users.model")

class UserServices{
    static async create(newUser){
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices