const { login } = require('../app/controllers/LoginController');
const loginRouter = require('./register')

function route(app) {

    app.use('/register', registerRouter)
    app.use('/login', login )

}

module.exports = route;