const mongoose = require('mongoose');

url = 'mongodb://localhost:27017/';

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
