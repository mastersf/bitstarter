var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = new Buffer(256);
app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  buffer = fs.readFileSync("index.html").toString("utf8");
  response.send(buffer);
  //console.log(fs.readFileSync('index.html', 'utf8');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

