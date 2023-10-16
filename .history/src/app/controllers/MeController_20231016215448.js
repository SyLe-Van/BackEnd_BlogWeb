class MeController {

    //GET /me/stored/
    storedPurchases(req, res) {
        res.render('me/storedPurchases')
    }

}

module.exports = new MeController; 