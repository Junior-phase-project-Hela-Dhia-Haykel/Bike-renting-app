const express = require('express');
const bodyParser = require('body-parser');

const Bike = require('../database/bike.js');
const User =require('../database/User.js')

const app = express();
const { getBikeByModel, getBikeRandom}=require('./helper.js')
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

//add a bike in the database
app.post('/bike',(req,res)=>{
     var Bike= new Bike(req.body);
     Bike.save((err,Bike)=>{
          res.json(bike)
     });
});

//delete a bike from the database
app.get("/api/bike", getBikeByModel);
app.get("/api/homePage", getBikeRandom);





app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
  });