const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

// Utility function to hash passwords
exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
};

// Utility function to compare passwords
exports.comparePasswords = async (password, hashedPassword) => {
  try {
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    return passwordsMatch;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw error;
  }
};

// Utility function to generate JWT token
exports.generateToken = (payload) => {
  try {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw error;
  }
};
