const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zipSchema = new Schema({
  zip: { type: String, unique: true, required: true },
  city: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Zip = mongoose.model("Zip", zipSchema);

module.exports = Zip;
