const express = require('express');
const router = express.Router();
const { initiateScan, getScanResults } = require('../controllers/scanController');

// Route to initiate network scan
router.post('/initiate-scan', initiateScan);

// Route to retrieve scan results
router.get('/scan-results', getScanResults);

module.exports = router;
