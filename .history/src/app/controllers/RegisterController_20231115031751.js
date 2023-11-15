// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


const User = require('../models/User');

class RegisterController {
    // [POST] /register
    register(req, res) {
        const { username, password} = req.body;
        // // const userDoc =  await User.create({username, password})
        // res.json({username, password})
        res.json({requestData:{username, password}})
        res.json
    }
}

module.exports = new RegisterController;