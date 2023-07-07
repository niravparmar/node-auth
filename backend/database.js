// database.js

const mongoose = require('mongoose');
const config = require('./config');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    throw new Error('Database connection error:', error);
  }
};

module.exports = {
  connectToDatabase,
};
