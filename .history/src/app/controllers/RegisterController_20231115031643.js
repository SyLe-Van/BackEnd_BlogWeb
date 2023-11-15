// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


const User = require('../models/User');
app.use(express.json());
class RegisterController {
    // [POST] /register
    register(req, res) {
        // const { username, password} = req.body;
        // // const userDoc =  await User.create({username, password})
        // res.json({username, password})
        res.json('register')
    }
}

module.exports = new RegisterController;