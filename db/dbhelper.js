  const pool = require('../db/mysql.js');
  const base_result = require('../config/config');
  /*
    MySql 커넥션 Count 확인 
      최대 접속 가능수 : show VARIABLES LIKE '%max_connection%';
      현재 접속 수 : show status LIKE 'Threads_connected';
  */
  
  async function query (sql, values){
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.query(sql, values);
      base_result.status = 200;
      base_result.result = rows;
    } catch (error) {
      base_result.status = 500;
      base_result.message = error;
      //logger.error(error)
    } finally {
      connection.release();
    }
    return base_result;
  }
  async function execute(sql, values){
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.execute(sql, values);
      base_result.status = 200;
      base_result.result = rows;
    } catch (error) {
      base_result.status = 500;
      base_result.message = error;
      //logger.error(error)
    } finally {
      connection.release();
    }
    return base_result;
    
  }

  // function query(){
  //   console.log("11");
  // }
  // function execute(){}

  module.exports = {query, execute};
