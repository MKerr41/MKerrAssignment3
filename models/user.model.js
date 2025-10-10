//models/user.model.js
const mongoose = require('mongoose');

//Schema for users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

//Update the updated timestamp when changes are made
userSchema.pre('save', function(next) {
  this.updated = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);
