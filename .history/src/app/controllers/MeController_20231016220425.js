const Purchase = require('../models/Purchase');
const { mongooseToObject } = require('../../util/mongoose');


class MeController {

    //GET /me/stored/
    storedPurchases(req, res, next) {
        Purchase.find({})
            .then(purchases =>  res.render('me/stored-Purchases', {
                purchases: mongooseToObject(purchases)
            }))
            .catch(next)
       
    }

}

module.exports = new MeController;  