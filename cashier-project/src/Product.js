const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String } // URL ของภาพสินค้า
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
