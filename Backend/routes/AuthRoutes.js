const express = require('express');
const { registerUser, loginUser } = require('../controllers/AuthController');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = express.Router();


// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Protected Route Example
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.user });
});

module.exports = router;
