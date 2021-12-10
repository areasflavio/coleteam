import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename:
      process.env.NODE_ENV === 'test'
        ? path.resolve(__dirname, 'src', 'database', 'databaseTest.sqlite')
        : path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
