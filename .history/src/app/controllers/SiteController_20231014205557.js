const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    index(req, res, next) {

        
        Purchase.find({})
            .then(Purchaseurchase => res.render('home', {
                Purchase
            }))
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

