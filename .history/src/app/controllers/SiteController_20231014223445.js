const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    index(req, res, next) {

        Purchase.find({})
            .then(Purchase => res.render('home', {
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

