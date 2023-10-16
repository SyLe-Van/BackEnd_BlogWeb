const express = require('express')
const router = express.Router()

const purchaseController = require('../app/controllers/PurchaseController')

router.get('/create', purchaseController.create);
router.post('/store', purchaseController.store);
router.get('/:id/change', purchaseController.change);
router.put('/:id', purchaseController.update);
router.get('/:slug', purchaseController.show)

module.exports = router;
