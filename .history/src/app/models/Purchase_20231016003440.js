const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Purchase = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true }
    },
    {
        timestamps: true,
    },
);

module.exports =  mongoose.model('purchase', Purchase);