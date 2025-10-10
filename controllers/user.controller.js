//controllers/user.controller.js
//Author: Mason Kerr
//Student ID: 301517873
const User = require('../models/user.model');

//get all records
exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get record by id
exports.findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//add record
exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//modify record by id
exports.update = async (req, res) => {
  try {
    const updates = { ...req.body, updated: Date.now() };
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//remove record by id
exports.deleteOne = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//remove all records
exports.deleteAll = async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};