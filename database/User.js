const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  firstName: String,
  Email: String,
  Adresse: String,
  ZipCode:Number,
  city: String,
  phone: Number
});

const user = mongoose.model('user', userSchema);
const addNewClient=(infos)=>{
  var {firstName, firstName, Email, Adresse, ZipCode, city, phone}=infos;
  return user.create({firstName, firstName, Email, Adresse, ZipCode, city, phone})
}
module.exports.addNewClient=addNewClient;
module.exports = user;