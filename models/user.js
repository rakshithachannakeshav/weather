const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure username uniqueness
    minlength: [3, 'Username must be at least 3 characters long'],
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
    match: [/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
