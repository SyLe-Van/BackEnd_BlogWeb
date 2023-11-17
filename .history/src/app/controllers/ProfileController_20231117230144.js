const cookieParser = require('cookie-parser');

class ProfileController {
    // [GET] /Profile
    profile(req, res) {
        res.json('profile')
    }
}

module.exports = new ProfileController;
