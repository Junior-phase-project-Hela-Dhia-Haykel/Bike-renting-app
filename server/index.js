const express = require('express');
const bodyParser = require('body-parser');


const Bike = require('../database/bike.js');
const User =require('../database/User.js');

const app = express();
const { getBikeByModel, getAllData} = require('./helper.js')
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));

//add or update a user to the dataBase:
//app.post("/userInformation", (req,res)=>{
//     addNewClient(req.body).then((response)=>{
 //         res.send(response._id);
 //    })
//});

app.post('/user',(req,res)=>{
 
  User.update({firstName:req.body.firstName, lastName:req.body.lastName}, req.body,{upsert:true}).then(user =>{
       console.log(user)
       res.send('user added')
  });
});
 
//add new bike model to the database
app.post('/admin/addmodel', (req,res) => {
     Bike.Bike.update({model: req.body.model}, req.body,{upsert:true}).then(user =>{
          console.log(user)
          res.send('user added')
     });
})

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