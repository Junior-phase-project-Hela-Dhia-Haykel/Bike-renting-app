const mongoose = require('mongoose');
const db = require('./index.js')
const bikeSchema = new mongoose.Schema({
  model: String,
  price: Number,
  imageUrl: String,
  description: String,
  quantity: Number,
  daysOfService: {type: Number, default: 0}
}, 
  {
    timestamps: true
  }
);
const Bike = db.model('Bike', bikeSchema);
let findBikeByModel = (model) => {
  return Bike.find({model}) 
 };


 let getAll = () => {
   return Bike.find();
 };




module.exports ={
    findBikeByModel,
    getAll,
    Bike
  }