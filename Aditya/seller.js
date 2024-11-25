const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  storeName: { type: String, required: true },
  gstNumber: { type: String }, // Tax details
  businessAddress: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String }
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // List of products sold by the seller
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Seller', sellerSchema);
