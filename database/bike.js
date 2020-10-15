const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const bikeSchema = new mongoose.Schema({
  model: String,
  price: Number,
  imageUrl: String,
  description: String,
  daysOfService: {type: Number, default: 0}
}, 
  {
    timestamps: true
  }
);


const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;