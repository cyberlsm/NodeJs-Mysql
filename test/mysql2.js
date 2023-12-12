import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.SQL_DEV_HOST,
  user: process.env.SQL_DEV_UID,
  password: process.env.SQL_DEV_PWD,
  database: process.env.SQL_DEV_DATABASE,
  port:3306,
  connectionLimit: 10
});

async function getMember(){
  debugger;
  const [rows,results] = await pool.execute('SELECT * FROM `member` ORDER BY `userID` ASC LIMIT 5;');
  console.log("==================================");
  console.log(rows);
  //console.log("==================================");
  //console.log(results);
  return(rows);
}
//console.log("==================================");
const members = await getMember();
//console.log(members);