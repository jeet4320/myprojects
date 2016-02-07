var express = require('express');
var app = express();
var http = require('http');
var util = require('util')

app.set('port', (process.env.PORT || 8200));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('pages/index');
});


http.createServer('/message',function (req, res) {

    console.log('Request received: ');
    util.log(util.inspect(req)) // this line helps you inspect the request so you can see whether the data is in the url (GET) or the req body (POST)
    util.log('Request recieved: \nmethod: ' + req.method + '\nurl: ' + req.url) // this line logs just the method and url

    var returnObject = {message: "Hello World!"};
    var returnObjectString = JSON.stringify(returnObject);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
	
    });
    res.end(returnObjectString);

}).listen(8200);
console.log('Server running on port 8200');
