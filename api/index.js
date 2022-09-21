const express = require('express');
const cartJson = require('./__mocks__/cart.json');

const app = express();
const PORT = 3001;

app.get('/cart', (req, res) => {
  res.send(cartJson);
});

app.get('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
