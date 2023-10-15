const mongoose = require('mongoose')

const url = 'mongodb+srv://SyL:Syle0712@syle.bmpwkdy.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(url);
        console.log('Connect successfully!') 
    }
    catch (error) {
        console.log('Connect Failure!')
    }
}

module.exports = {connect} 