const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { port, mongoURI } = require('./config');
const authRoutes = require('./routes/authRoutes');
const scanRoutes = require('./routes/scanRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/scan', scanRoutes);

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
