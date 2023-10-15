const newsRouter = require('./news')
const siteRouter = require('./site')
const purchasesRouter = require('./purchases')
function route(app) {

    app.use('/news', newsRouter)
    app.use('/', siteRouter)
   

}

module.exports = route;