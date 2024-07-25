const express = require('express');

const app = express();
const myport = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(myport, () => {
  console.log(`API available on localhost port ${myport}`);
});

module.exports = app;
