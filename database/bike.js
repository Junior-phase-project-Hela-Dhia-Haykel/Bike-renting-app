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
const addNewModel = (filter, doc)=>{
  return Bike.update(filter, doc, {upsert: true});
}


const getAll = () => {
   return Bike.find();
};

const removeBike = (condition) => {
  return Bike.remove(condition);
}


module.exports ={
    addNewModel,
    getAll,
    removeBike
  }