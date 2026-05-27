const db = require('../db/queries.js');

async function renderHome(req, res) {
    console.log('request made to home');
    res.render('home');
}

module.exports = {
    renderHome
};