const mongoose = require('mongoose');

const ScanResultSchema = new mongoose.Schema({
  ipAddress: {
    type: String
  },
  devices: {
    type: [String]
  },
  openPorts: {
    type: [Number]
  },
  vulnerabilities: {
    type: [String]
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  datetime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ScanResult', ScanResultSchema);
