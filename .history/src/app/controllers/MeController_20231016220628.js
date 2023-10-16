const Purchase = require('../models/Purchase');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


class MeController {

    //GET /me/stored/
    storedPurchases(req, res, next) {
        Purchase.find({})
            .then(purchases =>  res.render('me/stored-Purchases', {
                purchases: mutipleMongooseToObject(purchases)
            }))
            .catch(next)
       
    }

}

module.exports = new MeController;  