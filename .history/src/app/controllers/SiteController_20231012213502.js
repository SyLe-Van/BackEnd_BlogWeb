const Purchase = require('../models/Purchase');

class SiteController {

    // [GET] /
    async index(req, res) {

        try {
            const purchase = await Purchase.find({});
            if (purchase.count() === 0) {
                return res.status(404).json({error: 'Không tìm thấy dữ liệu!'});
            }
            res.json(purchase);
        }  catch (err) {
            res.status(400).json({error: 'ERROR!'});
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
