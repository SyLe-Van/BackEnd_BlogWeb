// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

const connection = require('../../config/db/index')
const User = require('../models/User');

class RegisterController {
    // [POST] /register
    register(req, res) {
        const { username, password} = req.body;
        res.json({requestData:{username, password}})
    }
}

module.exports = new RegisterController;  