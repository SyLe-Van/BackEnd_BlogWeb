
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class LoginController {
    // [POST] /login
    login(req, res) {
        res.json('login');
    }
}

module.exports = new LoginController;
