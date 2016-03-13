var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {  //custom method 1- take firstname and last name and write cb function to make firstt and last name
    type: String,
    trim: true, //removes white space from top and bottom
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be longer.'
    ]
  },
  email: {
    type: String,
    unique:true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date
  },
  fullName: String
});

///Write your custom methods here
UserSchema.methods.completeNamer function(cb) {
  this.completeName = this.firstName + this.lastName
}









var User = mongoose.model('User', UserSchema);
module.exports = User;