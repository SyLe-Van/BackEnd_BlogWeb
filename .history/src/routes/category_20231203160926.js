const express = require('express')
const router = express.Router()
const categoryController = require('../app/controllers/CategoryController')

router.get('/', categoryController.getCategories)

module.exports = router;