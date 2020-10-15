const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  Email: String,
  Adresse: String,
  ZipCode:Number,
  city: String,
  phone: Number
});

const user = db.model('user', userSchema);

module.exports = user;