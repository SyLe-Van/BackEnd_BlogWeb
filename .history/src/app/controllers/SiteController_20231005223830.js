const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    async index(req, res) {
        try {
            const Purchase = await Purchase.find({});
            res.json(Purchase);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!' });
        }
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;