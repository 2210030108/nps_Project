// config.js

module.exports = {
    // MongoDB connection configuration
    mongoURI: 'mongodb://localhost:27017/secure_network_scanner', // Change the URL as per your MongoDB setup
  
    // JWT secret key for authentication
    jwtSecret: 'your_secret_key_here', // Change this to a random and secure string
    
    // Port configuration for Express.js server
    port: process.env.PORT || 5000 // Change the port number as per your preference
  };
  