//models/contact.model.js
const mongoose = require('mongoose');

//Schema for contacts
const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true},
  lastname: { type: String, required: true},
  email: { type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
