// Initialize server
const express = require('express');
const app = express();
const port = 3000;
const hostname = 'localhost';

// Middleware to parse request body
app.use(express.json());

// Start server and log message
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);

    console.log('====================ENDPOINTS====================');
    console.log('/products');

    console.log('====================ALLOWED METHODS====================');
    console.log('GET, POST, DELETE');
});