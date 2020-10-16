const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  adress: String,
  zipCode:Number,
  city: String,
  phone: Number
});

const User = mongoose.model('User', userSchema);
const addNewClient=(infos)=>{
  var {firstName, lastName, email, adress, zipCode, city, phone}=infos;
  return User.create({firstName, lastName, email, adress, zipCode, city, phone})
}
module.exports.addNewClient=addNewClient;
module.exports = User;