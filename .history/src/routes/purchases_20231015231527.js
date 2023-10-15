const express = require('express')
const router = express.Router()

const purchaseController = require('../app/controllers/PurchaseController')

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', purchaseController.show)

module.exports = router;