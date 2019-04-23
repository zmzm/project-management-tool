require('dotenv').config({path: '../../.env'});
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_DATABASE,
      debug: process.env.ENV !== 'production',
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD || '',
      port: process.env.DB_PORT,
      user: process.env.DB_USER
    },
    migrations: {
      directory: '../../dist/database/migrations',
    },
  },
};