const express = require('express');

const app = express();
const myport = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const myid = req.params.id;

  res.send(`Payment methods for cart ${myid}`);
});

app.listen(myport, () => {
  console.log(`API available on localhost port ${myport}`);
});

module.exports = app;
