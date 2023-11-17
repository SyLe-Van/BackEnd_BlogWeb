const { login } = require('../app/controllers/LoginController');
const loginRouter = require('./register')
const registerRouter = require('./login')
function route(app) {

    app.use('/register', registerRouter)
    app.use('/login', loginRouter )

}

module.exports = route;