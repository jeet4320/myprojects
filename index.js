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

app.get('/login',function(req,res){

    var json = {
    "students":[{
              "name"   : "Alice Brown",
              "phone"    : "8171234562",
              "DOB"  : "02/02/1985",
              "company"  : "Intel",
              "jobtype"  : "Full time",
              "school"  : "UTA",
              "gpa"  : 3.6,

              "degree"  : "MS in Computer Science",
              "major"  : "Computer Science",
              "gender"  : "Male",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Riverbend Drive",
                    "city": "Dallas",
                    "state": "Texas",
                    "zip": "75201"
                    },
              "longitude": 32.7318409,
              "latitude": -96.78955078
        },
        {
              "name"   : "Jeet Patil",
              "phone"    : "8174567562",
              "DOB"  : "02/02/1976",
              "company"  : "Cognizant",
              "jobtype"  : "Full time",
              "school"  : "UTA",
              "gpa"  : 3.8,

              "degree"  : "MS in Computer Science",
              "major"  : "Computer Science",
              "gender"  : "Male",
              "nationality"  : "Indian",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "New York",
                    "state": "new York",
                    "zip": "10001"
                    },
              "longitude": 40.7143528,
              "latitude": -74.0059731
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Pittsburgh",
                    "state": "Pennsylvania",
                    "zip": "10001"
                    },
              "longitude": 40.44316518,
              "latitude": -79.98802876
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "123 Main Drive",
                    "city": "San Diego",
                    "state": "California",
                    "zip": "92093"
                    },
              "longitude": 32.71838495,
              "latitude": -117.16509313
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
	      "address": {
                    "street_address": "123 South Drive",
                    "city": "Los Angeles",
                    "state": "California",
                    "zip": "92093"
                    },
              "longitude": 34.05362996,
              "latitude": -118.23626012
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Las Vegas",
                    "state": "Nevada",
                    "zip": "10001"
                    },
              "longitude": 36.22306377,
              "latitude": -115.10515661
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "134 Benge Drive",
                    "city": "Denver",
                    "state": "Colorado",
                    "zip": "456878"
                    },
              "longitude": 39.82209392,
              "latitude": 39.82209392
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Atlanta",
                    "state": "Georgia",
                    "zip": "10001"
                    },
              "longitude": 33.84858051,
              "latitude": -84.38738317
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Pittsburg",
                    "state": "Kansas",
                    "zip": "10001"
                    },
              "longitude": 40.44316518,
              "latitude": -79.98802876
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Pittsburg",
                    "state": "Kansas",
                    "zip": "10001"
                    },
              "longitude": 40.44316518,
              "latitude": -79.98802876
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Pittsburg",
                    "state": "Kansas",
                    "zip": "10001"
                    },
              "longitude": 40.44316518,
              "latitude": -79.98802876
        },
	{
              "name"   : "Richel Williams",
              "phone"    : "8257897561",
              "DOB"  : "04/12/1987",
              "company"  : "Apple",
              "jobtype"  : "Full time",
              "school"  : "UGA",
              "gpa"  : 4.0,

              "degree"  : "MS in GeoScience",
              "major"  : "GeoScience",
              "gender"  : "Female",
              "nationality"  : "American",
              "address": {
                    "street_address": "955 Benge Drive",
                    "city": "Pittsburg",
                    "state": "Kansas",
                    "zip": "10001"
                    },
              "longitude": 40.44316518,
              "latitude": -79.98802876
        }
    ]
};

 

  res.contentType('application/json');
  res.send(JSON.stringify(json));
  //  res.end(json);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


