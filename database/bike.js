const mongoose = require('mongoose');
const bikeSchema = new mongoose.Schema({
  model: String,
  price: Number,
  imageUrl: String,
  description: String,
  Quantity: Number,
  daysOfService: {type: Number, default: 0}
}, 
  {
    timestamps: true
  }
);
let findBikeByModel = (model) => {
  return Bike.find({model:model}) 
 };


 let findBike = (number) => {
   return Bike.find()
     .limit(number);
 };


const Bike = mongoose.model('Bike', bikeSchema);

module.exports ={
 
    findBikeByModel,
    findBike,
    Bike
  }