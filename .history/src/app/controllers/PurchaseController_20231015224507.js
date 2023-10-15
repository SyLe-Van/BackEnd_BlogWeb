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
    show(req, res, next) {
        res.send('Create Page')
    }
}

module.exports = new PurchaseController;

