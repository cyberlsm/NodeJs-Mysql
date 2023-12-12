const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

// 사용 예시
const config = {
  host: process.env.SQL_DEV_HOST,
  user: process.env.SQL_DEV_UID,
  password: process.env.SQL_DEV_PWD,
  database: process.env.SQL_DEV_DATABASE,
  port: 3306,
  connectionLimit: 10,
};

module.exports = mysql.createPool(config);