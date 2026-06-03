const { Router } = require('express');
const newRouter = Router();
const newController = require('../controllers/newController.js');

newRouter.get('/', newController.renderCreateGet);
newRouter.post('/', newController.usePostForEdit);

module.exports = { newRouter };