// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');


const User = require('../models/User');

class RegisterController {
    // [POST] /register
    async register(req, res) {
        const { username, password} = req.body;
        try{
            const userDoc =  await User.create({username, password});
            res.json(userDoc)
        }
        catch(err){
            res.status(400).json({message: err.message})
        }
    }
}

module.exports = new RegisterController;