// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

const User = require('../models/User');

class RegisterController {
    // [POST] /register
    async register(req, res) {
        const { username, password} = req.body;
        res.json({requestData:{username, password}})
        // const UserDoc = await User.create({username,password,});
        // res.json(UserDoc);
        // res.json('register')
    }
}

module.exports = new RegisterController;
