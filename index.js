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

app.use(express.bodyParser());

app.post('/search', function(req, res){
   
    var returnObject = {message: "Hello World!"};
    var returnObjectString = JSON.stringify(returnObject);
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
	
    });
    res.end(returnObjectString);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
