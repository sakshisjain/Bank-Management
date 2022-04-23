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
    required:false,
  },
  department: {
    type: String,
    required:false,
  },
  room: {
    type: String,
    required:false,
  },
  location: {
    type: String,
    required:false,
  },
  phone: {
    type: Number,
    required:false,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);