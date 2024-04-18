const portscanner = require('portscanner');

// Function to perform network scanning
exports.scanNetwork = async () => {
  try {
    // Define the range of IP addresses to scan (e.g., 192.168.0.1 - 192.168.0.255)
    const startIP = '192.168.0.1';
    const endIP = '192.168.0.255';

    const scanResults = [];

    // Iterate over the range of IP addresses and scan each one
    for (let i = 1; i <= 255; i++) {
      const ipAddress = `192.168.0.${i}`;

      // Check if the IP address is reachable
      const isReachable = await portscanner.checkHost(ipAddress);

      if (isReachable) {
        // If the IP address is reachable, perform port scanning
        const openPorts = await portscanner.findAPortNotInUse(1, 65535, ipAddress);

        // Push scan results to the array
        scanResults.push({ ipAddress, openPorts });
      }
    }

    return scanResults;
  } catch (error) {
    console.error('Error scanning network:', error);
    throw error;
  }
};
