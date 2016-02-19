# CSE 5335 Project 1 ‐ Spring 2016

This is a web application developed by using below technologies.

- Node.js - server side framework
- jQuery - client side framework
- HTML 
- CSS
- RestFul web services

### Why Node.js as server side framework?

1. It is latest technolgy, light weight, easy to modify and maintain.
2. Node.js is easy to learn as it is being written in JavaScript and I am familiar with JavaScript and jQuery framework.
2. Node.js is event driven which can lead to more scalable applications.
3. Traditional web serving techniques create separate thread for each connection, while node.js creates only one thread using non-blocking I/O calls which make node.js better than traditional techniques.

### Why jQuery as client side framework?

1. It is light weight, widely used, easy to modify and maintain.
2. It is simple to make AJAX calls.
3. It has good tutorials and has good documentation over the internet which makes jQuery easy to learn even for beginners.

### What aspect of the implementation did you find easy, if any, and why?

1. The easy part of the application was to show JSON data in tabular format on client side.
2. Just I have received JSON from server and displayed it in tabular form using jQuery.

### What aspect of the implementation did you find hard, if any, and why? 

1. The difficult part of application was to show Google Map when users clicks on every button present in the row of table. 
2. The button was dynamically generated and I had to use different jQuery syntax '($(document).on( 'click','.map',function())' to make the **dynamically** generated button clickable instead of '$( "#target" ).click(function()'

### What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution? 

1. Installed Heroku Toolbelt so that local changes can be deplolyed to the heroku server and app can be run on it.
2. Installed Ruby before installing Heroku toolbelt as I am using Ubuntu OS and as per documentation in Heroku, for Ubuntu you should install Ruby first to make the Heroku toolbelt compatible with Ubuntu.

### What Ubuntu commands are required to deploy and run your server?

1. Download and install the Heroku Toolbelt.

2. If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```sh
$ heroku login
```
3. Use Git to clone cse5335-jsp9739's source code to your local machine.

```sh
$ heroku git:clone -a cse5335-jsp9739
$ cd cse5335-jsp9739
```
4. Make some changes to the code you just cloned and deploy them to Heroku using Git.
```sh
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```
5. Run the app on local machine
```sh
$ heroku local
```
6. Run the app on heroku server
```sh
$ heroku open
```
