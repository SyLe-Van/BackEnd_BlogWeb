const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('BlogWeb', 'root', 'Syle0712@', {
  host: 'localhost',
  dialect: 'mysql'
});