const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Natuska325',
  database: 'sistema_tarefas'
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("Banco conectado!");
});

module.exports = db;