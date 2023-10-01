
const path = require('path')
const express = require('express') 
const cors = require('cors')
const app = express()
const morgan = require('morgan')

const handlebars = require('express-handlebars');
require('dotenv').config()



app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined')) 

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})



const PORT = process.env.PORT || 8888

const listener =  app.listen(PORT, () => {
    console.log(`Example app listening at ` + listener.address().port)
})

