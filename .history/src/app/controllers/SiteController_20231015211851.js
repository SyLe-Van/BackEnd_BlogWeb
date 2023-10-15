const Purchase = require('../models/Purchase');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    index(req, res, next) {
        Purchase.find({})
            .then(purchase =>{
                purchase = purchase.map(purchase => purchase.toObject())
                res.render('home', {purchase})
            })
                // purchase: mutipleMongooseToObject(purchase),)
            .catch(next);
       
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

