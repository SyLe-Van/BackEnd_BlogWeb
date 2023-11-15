// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


class RegisterController {
    // [POST] /register
    register(req, res) {
        res.json('register');
    }
}

module.exports = new RegisterController;  