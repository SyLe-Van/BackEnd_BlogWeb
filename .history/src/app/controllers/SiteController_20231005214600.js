const Purchase = require('../models/Purchase')

class SiteController {

    // [GET] /
    async index(req, res) {

        await Purchase.find({});

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;