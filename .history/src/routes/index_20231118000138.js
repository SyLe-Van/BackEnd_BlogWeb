const {register} = require('../app/controllers/RegisterController')
const {login} = require('../app/controllers/LoginController')
const {logout} = require('../app/controllers/LogoutController')
const {profile} = require('../app/controllers/ProfileController')
const registerRouter = require('./register')
const loginRouter = require('./login')
const profileRouter = require('./profile')
const logoutRouter = require('./logout')
function route(app) {

    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/profile', profileRouter)
    app.use('/logout', logoutRouter)

}

module.exports = route;