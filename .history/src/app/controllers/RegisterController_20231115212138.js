// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


const User = require('../models/User');

class RegisterController {
    // [POST] /register
    async register(req, res) {
        const { username, password} = req.body;
        await User.create({username,password,});
        res.json({requestData: {username, password}});

    }
}

module.exports = new RegisterController;