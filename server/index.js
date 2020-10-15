const express = require('express');
const bodyParser = require('body-parser');
const Bike = require('../database/bike.js')
const app = express();
const { getBikeByModel, getBikeRandom}=require('./helper.js')
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));

//app.post("/api/userInformation", addUserInformation);
app.get("/api/bike", getBikeByModel);
app.get("/api/homePage", getBikeRandom);





app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });