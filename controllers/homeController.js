const queries = require('../db/queries.js');

async function renderHome(req, res) {
    const items = await queries.getInventory();
    console.log('request made to home');
    res.render('home', { items: items });
}

module.exports = {
    renderHome
};