const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const route = require('./routes');
const port = 3000;
const cors = require('cors')
const methodOverride = require('method-override');
const { default: mongoose } = require('mongoose');
const User = require('./app/models/User');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://SyCung:07122002@blogcluster.9crdeuf.mongodb.net/?retryWrites=true&w=majority')

route(app);
app.listen(port, () =>{ console.log(`App listening at http://localhost:${port}`)},
);
