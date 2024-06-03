//use mysql database
var mysql = require('mysql');

// Connect Database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_florist'
});
 
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

module.exports = conn;