const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Purchase = new Schema({

    name: String,
    description: String,
    image: String,
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
});

module.exports =  mongoose.model('Purchase', purchase);