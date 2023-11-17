// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

const User = require('../models/User');

class RegisterController {
    // [POST] /register
    async register(req, res) {
        const { username, password} = req.body;
        try{
            const userDoc = await User.create({
              username,
              password: bcryp.hashSync(password, salt), 
            });
            res.json(userDoc);
          } catch(e) {
            console.log(e);
            res.status(400).json(e);
          }
    }
}

module.exports = new RegisterController;
