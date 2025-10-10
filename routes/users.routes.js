//routes/users.routes.js
//Author: Mason Kerr
//Student ID: 301517873
const express = require('express');
const router = express.Router();
const users = require('../controllers/user.controller');

//Get all users
router.get('/', users.findAll);

//Get 1 user by id
router.get('/:id', users.findOne);

//Add a new user
router.post('/', users.create);

//Update a user by id
router.put('/:id', users.update);

//Delete a user by id
router.delete('/:id', users.deleteOne);

//Delete all users
router.delete('/', users.deleteAll);

module.exports = router;