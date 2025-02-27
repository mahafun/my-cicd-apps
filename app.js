import { createConnection } from 'mysql2/promise';
import dbConfig from './dbConfig';

async function main() {
  try {
    console.log('Connecting to the database...');
    const connection = await createConnection(dbConfig);
    console.log('Connected to the database as id', connection.threadId);

    // Perform a simple query
    const [results, fields] = await connection.query('SELECT 1 + 1 AS solution');
    console.log('The solution is:', results[0].solution);

    await connection.end();
  } catch (err) {
    console.error('Error connecting to the database:', err.stack);
  }
}

main();
