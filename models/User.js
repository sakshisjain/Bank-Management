const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required:true,
    default: ''
  },
  department: {
    type: String,
    required:true,
    default: ''
  },
  room: {
    type: String,
    required:true,
    default: ''
  },
  location: {
    type: String,
    required:true,
    default: ''
  },
  phone: {
    type: Number,
    required:true,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);