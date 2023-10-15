const Purchase = require('../models/Purchase');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    // [GET] /
    index(req, res, next) {

        Purchase.find({})
            .then(purchases => res.render('home', {
                purchases: mutipleMongooseToObject(purchases),
            }))
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

