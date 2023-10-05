const Purchase = require('../models/Purchase')

class SiteController {

    // [GET] /
    index(req, res) {

        res.json({
            name: 'XT01'
        })
        //res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;