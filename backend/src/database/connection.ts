import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename:
      process.env.NODE_ENV === 'test'
        ? path.resolve(__dirname, 'databaseTest.sqlite')
        : path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;
