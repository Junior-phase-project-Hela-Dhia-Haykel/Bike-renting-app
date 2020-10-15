//function getBikeByModel will get bike from the database based on the model
const {fetchBikeByModel,fetchBike}=require('../database/bike.js')

exports.getBikeByModel = (req, res)=> {
   fetchBikeByModel()
   .then(bikes=>{
       return res.status(200).json(bikes);
   })
   .catch(()=>{
       return res.status(500).json(data);
   });
    }

exports.getBikeRandom = (req,res)=>{
    fetchBike()
    .then(bikes=>{
        return res.status(200).json(bikes);
    })
    .catch(()=>{
        return res.status(500).json(data);
    });
}    