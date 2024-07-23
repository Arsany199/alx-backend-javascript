const http = require('http');
const countStudents = require('./3-read_file_async');

const localhost = 'localhost';
const port = 1245;
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let db = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((mymsg) => {
        db += mymsg;
        res.end(db)
      })
      .catch((err) => {
        db += err.message;
	res.end(db);
      });
  }
});

app.listen(port, localhost, () => {
  console.log(`server running at ${localhost}:${port}`);
});

module.exports = app;
