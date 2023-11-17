
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class ProfileController {
    // [POST] /Profile
    async profile(req, res) {
        
    }
}

module.exports = new ProfileController;
