const Purchase = require('../models/Purchase');
const { mongooseToObject } = require('../../util/mongoose');


class MeController {

    //GET /me/stored/
    storedPurchases(req, res, next) {
        Purchase.find({})
            .then(purchases =>  res.render('me/stored-Purchases'))
       
    }

}

module.exports = new MeController;  