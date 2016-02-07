var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.post('handle',function(request,response){
     
      var returnObject = {message: "Hello World!"};
      var returnObjectString = JSON.stringify(returnObject);
    
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      req.on('data', function (chunk) {
      console.log('GOT DATA!');
	
    });
    res.end(returnObjectString);
});


