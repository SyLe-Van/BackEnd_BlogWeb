const Purchase = require('../models/Purchase')

class SiteController {

    // [GET] /
    async index(req, res) {

        try {
            await Purchase.find({});
            res.json(Purchase)
        }
        catch (error) {
            console.log('ERROR!')
        }
        //res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;