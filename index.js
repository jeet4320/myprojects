var http = require('http');
var util = require('util');
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 8200));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
http.createServer(function (req, res) {

switch(req.url) {
    case '/formhandler':
      console.log('Request received: ');
     
      var returnObject = {message: "Hello World!"};
      var returnObjectString = JSON.stringify(returnObject);
    
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      req.on('data', function (chunk) {
      console.log('GOT DATA!');
	
    });
    res.end(returnObjectString);
      break;
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
      console.log("[404] " + req.method + " to " + req.url);
  };


}).listen(8200);
console.log('Server running on port 8200');

