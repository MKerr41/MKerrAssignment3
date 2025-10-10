//server.js
//Author: Mason Kerr
//Student ID: 301517873
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactsRoutes = require('./routes/contacts.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.MONGO_URI) {
  console.error('Missing MONGO_URI in .env');
  process.exit(1);
}

//connect DB
connectDB(process.env.MONGO_URI);

//Needed cors for this, a lot of annoying issues
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route prefix /api/contacts and /api/users
app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);

//root message
app.get('/', (req, res) => {
  res.send('<h1>Mason Kerr COMP229 Portfolio Application — Backend is running</h1>');
});

//I had a lot of errors setting this up, so I needed some feedback
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});