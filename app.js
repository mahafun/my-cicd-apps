const mysql = require('mysql');
const dbConfig = require('./dbConfig');

const connection = mysql.createConnection(dbConfig);

console.log('Connecting to the database...');

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);

  // Perform a simple query
  connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is:', results[0].solution);
  });

  connection.end();
});
