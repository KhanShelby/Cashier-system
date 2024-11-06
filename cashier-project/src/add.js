const mongoose = require('mongoose');

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb://localhost:27017/Shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connect to MongoDB', error));

// สร้าง Schema และโมเดลสินค้า
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String
});

const Product = mongoose.model('Product', productSchema);

// ฟังก์ชันเพิ่มสินค้าใหม่
async function addProduct(name, price, img) {
  const product = new Product({
    name,
    price,
    img
  });

  try {
    const savedProduct = await product.save();
    console.log('Product added:', savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
  }
}

// เรียกฟังก์ชันเพิ่มสินค้า
addProduct('พิซซ่า', 100, 'pizza.jpg');
