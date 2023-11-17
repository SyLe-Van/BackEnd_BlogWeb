
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const cookieParser = require('cookie-parser');

class ProfileController {
    // [GET] /Profile
    profile(req, res) {
        res.json('profile')
    }
}

module.exports = new ProfileController;
