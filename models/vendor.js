const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorName: String,
  bankAccountNo: String,
  bankName: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  country: String,
  zipCode: String,
});

module.exports = mongoose.model('Vendor', vendorSchema);
