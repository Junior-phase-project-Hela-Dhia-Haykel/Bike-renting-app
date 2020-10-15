const mongoose = require('mongoose');
const Bike = require('./bike');

const mongoUri = 'mongodb://localhost:27017/bikeapp';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true},  
    function(err) {
    if (err) console.log(err);
    console.log(`database was created`);
  });

   mongoose.connection
  .once("open", () => {
    console.log("the connection was made");
  })
  .on("error", (error) => {
    console.log("faild to connect to database");
  });


let findBikeByModel = (model) => {
    return Bike.find({model:model}) 
   };


   let findBike = (number) => {
     return Bike.find()
       .limit(number);
   };

module.exports = db;
module.exports = findBikeByModel;
module.exports = findBike;