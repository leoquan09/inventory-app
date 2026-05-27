require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const { homeRouter } = require('./routes/homeRouter.js');

app.set('view engine', 'ejs');
app.set ('views', path.join(__dirname, 'views'));

app.use('/', homeRouter);

const PORT = 3000;

app.listen(PORT, console.log('app running on port 3000'));