const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Sales_Website', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };