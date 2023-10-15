const Purchase = require('../models/Purchase');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    // [GET] /
    index(req, res, next) {

        Purchase.find({})
            .then(purchase => res.json('home'))
                // purchase: mutipleMongooseToObject(purchase),)
            .catch(next)
        // Purchase.find({})
        //     .then(function(purchase){
        //     res.json(purchase)
        // })
        // .catch(function(err) {
        //     console.log(err)
        // })
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

