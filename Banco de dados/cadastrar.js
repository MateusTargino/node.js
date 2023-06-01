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

let query = "insert into usuario(login,senha) values('mateus123','123456');";
connection.query(query, function(error,results,fields){
})
connection.end();