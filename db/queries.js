const pool = require('./pool.js');

async function getInventory() {
    console.log('test');
    const { rows } = await pool.query('SELECT * FROM games');
    console.log(rows);
    return rows;
}

async function editInventory(name, type) {
    const query = `
    INSERT INTO games (name, type)
    VALUES ($1, $2)
    RETURNING *;
    `;

    const values = [name, type];

    await pool.query(query, values);
}

module.exports = { 
    getInventory,
    editInventory
 };