var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/search', function(req, res){
   
    var returnObject = {message: "Hello World!"};
    var returnObjectString = JSON.stringify(returnObject);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
	
    });
    res.end(returnObjectString);

});

app.listen(8200);
