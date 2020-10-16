
const {findBikeByModel, getAll}=require('../database/bike.js')
//function getBikeByModel will get bike from the database based on the model
exports.getBikeByModel = (req, res)=> {
   findBikeByModel(model)
   .then(bikes=>{
       return res.status(200).json(bikes);
   })
   .catch(()=>{
       return res.status(500).json(data);
   });
    }
//function getBikeByRandomly will get bike randomly from the database
exports.getAllData = (req,res)=>{
    getAll()
    .then(bikes=>{
        // console.log(bikes)
        return res.status(200).json(bikes);
    })
    .catch((err)=>{
        return res.status(500).send(err);
    });
}    

