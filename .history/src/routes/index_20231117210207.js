const {register} = require('../app/controllers/RegisterController')
const loginRouter = require('./register')
function route(app) {

    app.use('/register', registerRouter)

}

module.exports = route;