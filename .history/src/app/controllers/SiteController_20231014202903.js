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
        Purchase.find({})
            .then(purchase => res.json(purchase))
            .catch(next))
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

