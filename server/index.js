const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const { getBikeByModel, getAllData}=require('./helper.js')
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));

//add a user to the dataBase:

//app.post("/userInformation", (req,res)=>{
//     addNewClient(req.body).then((response)=>{
 //         res.send(response._id);
 //    })
//});

app.post('/user',(req,res)=>{
  var user=new user(req.body);
  user.save((err,user)=>{
       res.json(user)
  });
});
 
//update user's infos in the database
app.put('/user/:id', (req,res)=>{
     var condition={_id: req.params.id};
     user.update(condition, req.body)
     .then(doc=>{
          if(!doc){
               return res.status(404).end();
          }
               return res.status(200).json(doc);
     }).catch(err =>{
          console.log(error);
     })
})
//add abike in the database
//delete a bike from the database
app.get("/api/bike", getAllData);
// app.get("/api/homePage", getBikeByModel);





app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });