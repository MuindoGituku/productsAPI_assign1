// Initialize server
const express = require('express');
const errors = require('express-errors');

const app = express();
const port = 3000;
const hostname = 'localhost';

// Middleware to parse request body
app.use(express.json());

// Initialize products array
let products = [];
let gets = 0;
let posts = 0;
let deletes = 0;

// Get all products
app.get('/products', (req, res) => {
    gets++;

    console.log('products GET: received request');

    res.json(products);

    console.log('Processed Request Count---> GET: '+gets+' POSTS: '+posts+' DELETES: '+deletes);
    console.log('products GET: sending response');
});

// Get product
app.get('/products/:productId', (req, res) => {
    gets++;

    console.log('products GET: received request');

    const productId = req.params.productId;
    const product = products.find(p => p.productId === productId);

    res.json(product);

    console.log('Processed Request Count---> GET: '+gets+' POSTS: '+posts+' DELETES: '+deletes);
    console.log('products GET: sending response');
});

// Add product
app.post('/products', (req, res) => {
    console.log('products POST: received request');

    const product = {
        productId: req.body.productId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quatity
    };
    products.push(product);

    posts++;
    console.log('Processed Request Count---> GET: '+gets+' POSTS: '+posts+' DELETES: '+deletes);
    res.json(product);
    console.log('products POST: sending response');
});

// Delete all products
app.delete('/products', (req, res) => {
    console.log('products DELETE: received request');
    products = [];
    deletes++;
    console.log('Processed Request Count---> GET: '+gets+' POSTS: '+posts+' DELETES: '+deletes);
    res.json(products);
    console.log('products DELETE: sending response');
});

// Delete product
app.delete('/products/:productId', (req, res) => {
    console.log('products DELETE: received request');

    const productId = req.params.productId;
    const index = products.findIndex(p => p.productId === productId);

    products.splice(index, 1);

    deletes++;
    console.log('Processed Request Count---> GET: '+gets+' POSTS: '+posts+' DELETES: '+deletes);
    res.json(products);
    console.log('products DELETE: sending response');
});


// Start server and log message
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);

    console.log('====================ENDPOINTS====================');
    console.log('/products');
    console.log('/products/:productId');

    console.log('====================ALLOWED METHODS====================');
    console.log('GET, POST, DELETE');
});