const {register} = require('../app/controllers/RegisterController')
const {login} = require('../app/controllers/LoginController')
const {profile} = require('../app/controllers/ProfileController')
const registerRouter = require('./register')
const loginRouter = require('./login')
const profileRouter = require('./profile')

function route(app) {

    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/profile', profileRouter)

}

module.exports = route;