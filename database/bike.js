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


const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;