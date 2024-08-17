const express = require('express');
const connectDB = require('./config/DB') 
const authRoutes = require('./routes/AuthRoutes');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
