const queries = require('../db/queries.js');

async function renderCreateGet(req, res) {
    res.render('new');
};

module.exports = {
    renderCreateGet
};