var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
  res.render('pages/index');
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  var json = [{ "name"   : "Alice Brown",
  "phone"    : "8171234562",
  "DOB"  : "02/02/1985",
  "company"  : "Intel",
  "job-type"  : "full time",
  "school"  : "University of Texas Arlington",
  "gpa"  : 3.6,
  "research interests"  : "Big data",
  "degree"  : "Masters in Computer Science",
  "major"  : "Computer Science",
  "gender"  : "Male",
  "nationality"  : "Indian",
  "address": {
        "street_address": "955 Benge Drive",
        "city": "Arlington",
        "state": "Texas",
        "zip": "76013"
        },
  "longitude": 6.11499,
  "latitude": 50.76891
},
{ "name"   : "Alice1 Brown1",
  "phone"    : "8171234562",
  "DOB"  : "02/02/1985",
  "company"  : "Intel",
  "job-type"  : "full time",
  "school"  : "University of Texas Arlington",
  "gpa"  : 3.6,
  "research interests"  : "Big data",
  "degree"  : "Masters in Computer Science",
  "major"  : "Computer Science",
  "gender"  : "Male",
  "nationality"  : "Indian",
  "address": {
        "street_address": "955 Benge Drive",
        "city": "Arlington",
        "state": "Texas",
        "zip": "76013"
        },
  "longitude": 6.11499,
  "latitude": 50.76891
}];


  console.log("User name = "+user_name+", password is "+password);
  res.contentType('application/json');
  res.send(JSON.stringify(json));
  //  res.end(json);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

