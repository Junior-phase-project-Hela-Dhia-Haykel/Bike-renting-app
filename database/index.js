const mongoose = require('mongoose');
const Bike = require('./bike');

const mongoUri = 'mongodb://localhost:27017/bikeapp';

mongoose.connect(mongoUri, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected')
});


let findBikeByModel = (model) => {
    return Bike.find({model:model}) 
   };


   let findBike = (number) => {
     return Bike.find()
       .limit(number);
   };


module.exports = {
  findBikeByModel,
  findBike
}
