const newsRouter = require('./news')
const siteRouter = require('./site')
const meRouter = require('./me')
const purchasesRouter = require('./purchases')
function route(app) {

    app.use('/news', newsRouter)
    app.use('/purchases', purchasesRouter)
    app.use('/me', meRouter)
    app.use('/', siteRouter)
    
}

module.exports = route;