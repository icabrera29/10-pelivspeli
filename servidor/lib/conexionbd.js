var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '30667092icab',
  database : 'competencias',
  multipleStatements: true
});

module.exports = connection;
