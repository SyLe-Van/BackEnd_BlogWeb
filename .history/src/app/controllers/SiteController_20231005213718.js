const Purchase = require('../models/Purchase')

class SiteController {

    // [GET] /
    index(req, res) {
        Course.find({}, function (err, Purchase) {
            if (!err) {
                res.json(Purchase);
            } else {
                res.status(400).json({ error: 'ERROR!'});
            }
        });

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;