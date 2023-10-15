const Purchase = require('../models/Purchase');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    index(req, res, next) {
        Purchase.find({})
            .then(purchase =>{
    
                res.render('home', {
                    purchase: mutipleMongooseToObject(purchase)
                })
            })
            .catch(next);
       
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

