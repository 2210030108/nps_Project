const ScanResult = require('../models/ScanResult');

// Controller function for initiating network scans
exports.initiateScan = async (req, res) => {
  try {
    // Assuming scanResults is the data you want to save
    const scanResults = req.body; // You can get the data from the request body

    // Save the scan results to the database
    await ScanResult.create(scanResults);

    res.status(200).json({ message: 'Network scan initiated successfully' });
  } catch (error) {
    console.error('Error initiating network scan:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for retrieving scan results
exports.getScanResults = async (req, res) => {
  try {
    // Retrieve scan results from the database
    const scanResults = await ScanResult.find();

    res.status(200).json(scanResults);
  } catch (error) {
    console.error('Error retrieving scan results:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
