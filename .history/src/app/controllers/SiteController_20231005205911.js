const Purchase = require('../models/Purchase')

class SiteController {

    // [GET] /
    async index(req, res) {

        try {
            await MyModel.find({});
            console.log('Connect successfully!') 
        }
        catch (error) {
            console.log('Connect Failure!')
        }
        //res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;