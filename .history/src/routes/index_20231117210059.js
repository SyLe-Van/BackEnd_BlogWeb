const { login } = require('../app/controllers/LoginController');
const loginRouter = require('./register')
function route(app) {

    app.use('/register', registerRouter)

}

module.exports = route;