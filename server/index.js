const express = require('express');
const bodyParser = require('body-parser');
const Bike = require('../database/bike.js')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));








app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });