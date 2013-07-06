var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var buffer = new Buffer(16);
app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  buffer = Buffer.toString('utf8', fs.readFileSync("index.html"));
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

