// const Purchase = require('../models/Purchase');
// const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');

const { connection } = require("mongoose");


class RegisterController {
    // [POST] /register
    register(req, res) {
        const sql = "SELECT * FROM BlogWeb.USERS";
        connection.query(sql, function (err, result) {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log("Result: ", result);
        res.json({ result });
        });
        // const { username, password} = req.body;
        // res.json({requestData:{username, password}})
    }
}

module.exports = new RegisterController;  