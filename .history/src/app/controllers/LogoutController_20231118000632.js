
const secret = 'asdfadfdaff'
const jwt = require('jsonwebtoken');

class LogoutController {
    // [POST] /Logout
    logout(req, res) {
      res.json('Logged out!')
    }
}

module.exports = new LogoutController;
