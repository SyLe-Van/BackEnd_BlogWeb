const Purchase = require('../models/Purchase');
const { mongooseToObject } = require('../../util/mongoose');

class PurchaseController {

    
    // [GET] /purchases/T-shirt
    show(req, res, next) {
        Purchase.findOne({slug: req.params.slug})
            .then(purchase => {
                res.render('purchases/show', {purchase: mongooseToObject(purchase)})
            })
            .catch(next)
    }

    // purchases/create
    create(req, res, next) {
        res.render('purchases/create')
    }

    // [POST] purchases/store
    store(req, res, next) {
    
        const purchase = new Purchase(req.body)
        purchase.save()
            .then(() => res.redirect('/'))
            .catch(error => {
                
            })
    }
    // [GET] purchases/:id/change
    change(req, res, next) {
        Purchase.findById(req.params.id)
            .then(purchases => res.render('purchases/change', {
                purchases: mongooseToObject(purchases)
            }))
            .catch(next)

    }
     // [PUT] purchases/:id
    update(req, res, next) {
        Purchase.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/purchases'))
            .catch(next)
    }
}

module.exports = new PurchaseController();

