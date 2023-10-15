const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    index(req, res, next) {

        // try {
        //     const purchase = await Purchase.find({});
        //     res.json(purchase);
        // }  catch (err) {
        //     next(err)
        // }
        Purchase.find({})
            .then(purchase => res.render('home', Purchase))
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;

