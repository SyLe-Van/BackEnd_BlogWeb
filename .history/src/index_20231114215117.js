const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');  
const handlebars = require('express-handlebars');
const app = express();
const route = require('./routes');
const port = 3000;
const db = require('./config/db')
const methodOverride = require('method-override')
// Connect DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// HTTP logger
// app.use(morgan('combined'));
// Template engine


// Routes init
route(app);
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
