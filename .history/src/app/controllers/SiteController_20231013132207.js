const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    async index(req, res, next) {

        // try {
        //     const purchase = await Purchase.find({});
        //     res.json(purchase);
        // }  catch (err) {
        //     next(err)
        // }
        res.render('Nothing')
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
