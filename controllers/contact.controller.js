//controllers/contact.controller.js
//Author: Mason Kerr
//Student ID: 301517873
const Contact = require('../models/contact.model');

//Return all
exports.findAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Return by id
exports.findOne = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//add record
exports.create = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    const contact = new Contact({ firstname, lastname, email });
    const saved = await contact.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//modify record, keep id
exports.update = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//remove record by id
exports.deleteOne = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Delete all records
exports.deleteAll = async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: 'All contacts removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
