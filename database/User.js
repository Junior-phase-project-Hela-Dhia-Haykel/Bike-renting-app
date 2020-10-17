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
const addNewClient=(filter, doc)=>{
  return User.update(filter, doc, {upsert: true});
}
module.exports.addNewClient = addNewClient;
// module.exports = User;