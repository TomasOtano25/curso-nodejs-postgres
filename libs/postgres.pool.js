const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  post: 5432,
  user: 'tomas',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;
