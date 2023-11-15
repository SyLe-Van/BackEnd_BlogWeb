// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

const { connection } = require("mongoose");


class RegisterController {
    // [POST] /register
    register(req, res) {
        const sql = "select * from users";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            res.json({result})
        });
        // const { username, password} = req.body;
        // res.json({requestData:{username, password}})
    }
}

module.exports = new RegisterController;  