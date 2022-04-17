const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    age: Number,
    sports: [String],
    marks: [Number],
    family: {
      father: String,
      mother: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
