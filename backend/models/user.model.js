const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, requried: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  emailAddress: { type: String, required: true },
  civilStatus: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;