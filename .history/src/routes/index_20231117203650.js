const loginRouter = require('./register')

function route(app) {

    app.use('/register', registerRouter)
    app.use('/login', logi )

}

module.exports = route;