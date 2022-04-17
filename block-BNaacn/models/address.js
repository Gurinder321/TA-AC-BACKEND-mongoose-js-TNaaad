const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: mongoose.Schema.Types.String,
  },
  { timestamps: true }
);

const Address = mongoose.model('Address', articleSchema);

module.exports = Address;
