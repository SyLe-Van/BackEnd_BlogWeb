const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    index(req, res, next) {

        Purchase.find({})
            .then(purchase => res.render('home', {
                name: "T-shirt",
                purchase
            }))
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

