class MeController {

    //GET /me/stored/
    storedPurchases(req, res) {
        res.render('search')
    }

}

module.exports = new MeController; 