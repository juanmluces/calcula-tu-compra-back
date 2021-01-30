const mySql = require('mysql');

require('dotenv').config();

const createPool = () => {
  const pool = mySql.createPool({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b1b686519824fe',
    password: '38955cae',
    port: 3306,
    database: 'heroku_fe6a2ff421738a8'
  });
  global.db = pool
}

module.exports = { createPool }