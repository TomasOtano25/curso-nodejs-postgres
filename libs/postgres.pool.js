const { Pool } = require('pg');
const { config } = require('../config/config');

let URI = '';

if (config.isProd) {
  URI = config.dbUrl;
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}
const options = {
  connectionString: URI,
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
}

const pool = new Pool(options);

// const pool = new Pool({
//   host: 'localhost',
//   post: 5432,
//   user: 'tomas',
//   password: 'admin123',
//   database: 'my_store',
// });

module.exports = pool;
