const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',        // MySQL user
  password: '',        // MySQL password
  database: 'task_manager'
});
module.exports = pool.promise();
