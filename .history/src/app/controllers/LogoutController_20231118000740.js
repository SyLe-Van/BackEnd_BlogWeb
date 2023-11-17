
const secret = 'asdfadfdaff'
const jwt = require('jsonwebtoken');

class LogoutController {
    // [POST] /Logout
    logout(req, res) {
      res.cookies('token', '').json('Ok')
    }
}

module.exports = new LogoutController;
