var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));



//Database configuration
mongoose.connect('mongodb://localhost/week18day3mongoose');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//Require Schema
var Example = require('./userModel.js');





// Routes
app.get('/', function(req, res) {
  res.send(index.html);
});

app.post('/submit', function(req, res) {

  var user = new Example(req.body);


//Using the starter code, write two custom methods
//and call them before saving the user.
//One method should take the firstName and lastName fields
//and combine them to create the fullName field
//The other should save the current date as the lastUpdated field.
//////////////////////////
//WRITE CUSTOM METHODS HERE



//////////////////////////



  user.save(function(err, doc) {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});




app.listen(3000, function() {
  console.log('App running on port 3000!');
});