const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  port :3307,
  database : 'Mateus'  
});
connection.connect();

console.log("conectado");

let query = "delete from usuario  where codigo =2;";
connection.query(query, function(error,results,fields){
})
connection.end();