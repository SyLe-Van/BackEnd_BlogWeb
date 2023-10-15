const Purchase = require('../models/Purchase');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {

    // [GET] /
    index(req, res) {

        // Purchase.find({})
        //     .then(purchases => res.render('home', {
        //         purchases: mutipleMongooseToObject(purchase),
        //     }))
        //     .catch(next)
        Purchase.find({}).then(function(purchase){
            res.json(purchase)
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

