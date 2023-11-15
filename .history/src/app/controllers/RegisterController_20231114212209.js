// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


class RegisterController {

    
    storedPurchases(req, res, next) {
        Purchase.find({})
            .then(purchases =>  res.render('me/stored-Purchases', {
                purchases: mutipleMongooseToObject(purchases)
            }))
            .catch(next)
       
    }
}

module.exports = new RegisterController;  