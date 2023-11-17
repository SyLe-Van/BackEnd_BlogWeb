// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
import User from '../models/User';

const User = require('../models/User');

class RegisterController {
    // [POST] /register
    register(req, res) {
        const { username, password} = req.body;
        res.json({requestData:{username, password}});
        // const UserDoc = await User.create({username,password,});
        // res.json(UserDoc)
    } 

}

module.exports = new RegisterController;