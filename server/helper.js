
const {addNewModel, getAll, removeBike} = require('../database/bike.js')
const {addNewClient} = require('../database/User.js')

//function addModel will add a new bike to the database
exports.addModel = (req, res)=> {
   addNewModel({model: req.body.model}, req.body,{upsert:true})
   .then(bike => {
        return res.status(200).send('bike model added')
    }).catch((err)=>{
        return res.status(500).send(err);
    });
}
//function getAllData will get all bikes from the database
exports.getAllData = (req,res) =>{
    getAll()
    .then(bikes=>{
        // console.log(bikes)
        return res.status(200).json(bikes);
    })
    .catch((err)=>{
        return res.status(500).send(err);
    });
} 
//function to add or update users
exports.updateUser=(req,res) =>{
    addNewClient({firstName: req.body.firstName, lastName:req.body.lastName}, req.body).then(user => {
        console.log(user)
        return res.status(200).send('user added')
    }).catch((err)=>{
        console.log(err)
        return res.status(500).send(err);
    });
  }  

//remove bike model from database
exports.removeBike = (req, res) => {
    removeBike({model: req.body.removeModel})
    .then(result => {
         return res.status(200).send(result)
     }).catch((err)=>{
         return res.status(500).send(err);
     });
 }