var express = require('express');
var app = express();
// var wiki = require('./wiki');
var users = require('./userRoutes');
const hostname = '127.0.0.1';
const port = 3000;


// app.get('/', function(req, res) {
//   res.send("Hello world");
// });

// app.use('/wiki', wiki);

app.use('/user', users);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});