// BASE SETUP

//call the packages we need

var express = require('express');           //call express
var app = express();                        //define our app using express
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bears');

//configure app to use bodyParser()
//this will let us get the data from POST

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        //set the port

//ROUTES FOR OUR API

var router = express.Router();              // get an instance of the Router

router.get('/', function(req, res){

    res.json({ message: 'Horray! welcome to our API' });
});

//More routes to follow

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /API
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);