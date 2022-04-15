const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  age: { type: Number, default: 18 },
  email: { type: String, lowercase: true, trim: true },
  password: { type: String, lowercase: true, trim: true, min: 5, max: 15 },
  createdAt: { type: Date, required: true, default: Date.now },
});
