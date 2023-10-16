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
    
        const purchase = new Purchase(req.body)
        purchase.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }
    // edit item
    change(req, res, next) {
        res.render('purchases/change')
    }
}

module.exports = new PurchaseController();

