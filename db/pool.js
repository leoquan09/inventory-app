const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: 'postgresql://postgres:09272011@localhost:5432/inventory'
});
