const express = require('express');

const localhost = 'localhost';
const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`server running at ${localhost}:${port}`);
});

module.exports = app;
