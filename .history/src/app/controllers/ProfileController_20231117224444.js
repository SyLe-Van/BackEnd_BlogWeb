
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const cookieParser = require('cookie-parser');

class ProfileController {
    // [POST] /Profile
    profile(req, res) {
        res.json(cookie)
    }
}

module.exports = new ProfileController;
