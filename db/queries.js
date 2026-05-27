const pool = require('./pool.js');

async function getInventory() {
    console.log('test');
    const { rows } = await pool.query('SELECT * FROM games');
    console.log(rows);
    return rows;
}

module.exports = { getInventory };