const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { addModel, getAllData, updateUser, removeBike } = require('./helper.js')
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));

//add or update a user to the dataBase:
app.post('/user',updateUser);


//add new bike model to the database
app.post('/admin/addmodel', addModel);


//remove a bike model from the database
app.post('/admin/removemodel', removeBike)

//fetch all data from the database
app.get("/api/bike", getAllData);



app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });