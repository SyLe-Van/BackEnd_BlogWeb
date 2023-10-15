const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    async index(req, res) {

        // try {
        //     const purchase = await Purchase.find({});
        //     res.json(purchase);
        // }  catch (err) {
        //     next(err)
        // }
        res.render('/home')
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
