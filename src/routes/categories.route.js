const {Router} = require('express')
const { createCategorie } = require('../controllers/categories.controller')
const router = Router()

router.post('/api/v1/categorie', createCategorie)

module.exports = router