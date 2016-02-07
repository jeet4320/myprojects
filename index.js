var http = require('http');
var util = require('util');

http.createServer(function (req, res) {

switch(req.url) {
    case '/':
      res.redirect('views/pages/index.ejs')
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

