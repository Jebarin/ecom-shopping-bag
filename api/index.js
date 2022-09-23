const express = require('express');
const cors = require('cors');
const cartJson = require('./__mocks__/cart.json');

const app = express();
app.use(cors());
const PORT = 3001;

// Cart API
app.get('/cart', (req, res) => {
  res.send(cartJson);
});

// Handle default routes
app.get('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
