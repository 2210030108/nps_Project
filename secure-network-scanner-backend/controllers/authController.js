const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { hashPassword, comparePasswords, generateToken } = require('../utils/authUtils');

// Controller function for user registration
exports.registerUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = generateToken({ userId: newUser._id });

    // Send response with token
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for user login
exports.loginUser = async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare passwords
    const passwordsMatch = await comparePasswords(password, user.password);
    if (!passwordsMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = generateToken({ userId: user._id });

    // Send response with token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
