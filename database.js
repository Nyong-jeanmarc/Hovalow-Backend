const { Pool } = require('pg');

const pool = new Pool({
  user: 'new',
  host: 'localhost',
  database: 'Hovalow',
  password: '    ',
  port: 5432,
});

module.exports = pool;