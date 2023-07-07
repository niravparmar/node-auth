// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const { connectToDatabase } = require('./database');
const { registerUser, loginUser, protectRoute } = require('./controllers/authController.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectToDatabase()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// Register route
app.post('/register', registerUser);

// Login route
app.post('/login', loginUser);

// Protected route
app.get('/protected', protectRoute);

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
