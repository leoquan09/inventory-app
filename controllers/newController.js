const queries = require('../db/queries.js');

async function renderCreateGet(req, res) {
    res.render('new');
};

async function usePostForEdit(req, res) {
    const name = req.body.name;
    const type = req.body.type;
    await queries.editInventory(name, type);
    console.log(req.body);
    res.redirect('/');
};

module.exports = {
    renderCreateGet,
    usePostForEdit
};