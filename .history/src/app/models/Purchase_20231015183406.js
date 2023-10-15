const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Purchase = new Schema({

    name: String,
    email: String,
    age: Number,
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
});


module.exports =  mongoose.model('purchase', Purchase);