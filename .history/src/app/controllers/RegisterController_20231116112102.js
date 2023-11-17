// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


const User = require('../models/User');

class RegisterController {
    // [POST] /register
    async register(req, res) {
        const { username, password} = req.body;
        const UserDoc = await User.create({username,password,});
        res.json(UserDoc);
            

    } 
}

module.exports = new RegisterController;