const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true, trim: true },
  age: { type: Number, default: 0 },
  password: { type: String, minlength: 5 },
  createdAt: { type: Date, required: true, default: Date.now },
  favorites: [String],
});

const Users = mongoose.model('Users', articleSchema);

module.exports = Users;
