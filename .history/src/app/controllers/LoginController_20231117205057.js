// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class LoginController {
    // [POST] /Login
    async login(req, res) {
        const { username, password} = req.body;
        const userDoc = await User.findOne({username});
        res.json(userDoc);
    }
}

module.exports = new LoginController;
