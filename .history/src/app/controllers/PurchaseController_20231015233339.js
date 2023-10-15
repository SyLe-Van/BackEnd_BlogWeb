const Purchase = require('../models/Purchase');
const { mongooseToObject } = require('../../util/mongoose');

class PurchaseController {

    
    // [GET] /course/T-shirt
    show(req, res, next) {
        Purchase.findOne({slug: req.params.slug})
            .then(purchase => {
                res.render('purchases/show', {purchase: mongooseToObject(purchase)})
            })
            .catch(next)
    }

    // course/create
    create(req, res, next) {
        res.render('purchases/create')
    }

    // [POST] course/store
    store(req, res, next) {
        // res.json(req.body)
    }
}

module.exports = new PurchaseController;

