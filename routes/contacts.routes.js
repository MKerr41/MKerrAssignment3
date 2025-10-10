//routes/contacts.routes.js
//Author: Mason Kerr
//Student ID: 301517873
const express = require('express');
const router = express.Router();
const contacts = require('../controllers/contact.controller');

//Get all contacts 
router.get('/', contacts.findAll);

//Get 1 contact by id
router.get('/:id', contacts.findOne);

//Add a new contact
router.post('/', contacts.create);

//Update a contact by id
router.put('/:id', contacts.update);

//Remove a contact by id
router.delete('/:id', contacts.deleteOne);

//Remove all contacts
router.delete('/', contacts.deleteAll);

module.exports = router;