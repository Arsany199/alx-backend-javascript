const express = require('express');

const myapp = express();
const myport = 7865;

myapp.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

myapp.listen(myport, () => {
  console.log(`API available on localhost port ${myport}`);
});

module.exports = myapp;
