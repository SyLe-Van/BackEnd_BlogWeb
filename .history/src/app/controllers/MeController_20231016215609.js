class MeController {

    //GET /me/stored/
    storedPurchases(req, res) {
        res.render('me/stored-Purchases')
    }

}

module.exports = new MeController;  