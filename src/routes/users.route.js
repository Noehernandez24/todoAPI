const {Router} = require('express')
const { createUser } = require('../controllers/users.controller')
const router = Router()

// Create user
router.post('/api/v1/user', createUser)

module.exports = router