const http = require('http');

const localhost = '127.0.0.1';
const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, localhost, () => {
  console.log(`Server running at //${localhost}:${port}`);
});

module.exports = app;
