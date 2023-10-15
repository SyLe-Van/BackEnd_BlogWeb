const Purchase = require('../models/Purchase');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class PurchaseController {

    
    // [GET] /course/T-shirt
    show(req, res) {
        res.send('Course Detail');
    }
}

module.exports = new PurchaseController;

