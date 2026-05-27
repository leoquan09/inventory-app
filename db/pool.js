const { Pool } = require('pg');

const db = new Pool({
    connectionString: 'postgresql://postgres:09272011@localhost:5432/inventory'
});

module.exports = { db };