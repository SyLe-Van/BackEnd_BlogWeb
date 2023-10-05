const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({

    name: String,
    description: String,
    image: String,
    createAt: {type: String, default: Data.now},
    updateAt: {type: String, default: Data.now},
  });