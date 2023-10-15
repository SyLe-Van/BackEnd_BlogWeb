const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    index(req, res, next) {

        Purchase.find({})
            .then(purchases => res.render('home', {
                purchases
            }))
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

