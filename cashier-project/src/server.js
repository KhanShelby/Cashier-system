const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db'); // นำเข้าโมดูลการเชื่อมต่อฐานข้อมูล
const Product = require('./Product'); // นำเข้าโมเดลสินค้า

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// เชื่อมต่อกับ MongoDB
connectDB();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// สร้าง API เพื่อดึงข้อมูลสินค้า
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

// เพิ่มสินค้าใหม่
app.post('/api/products', async (req, res) => {
  const { name, price, img } = req.body;

  const newProduct = new Product({
    name,
    price,
    img,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).send(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(400).send('Error adding product');
  }
});

// เริ่มเซิร์ฟเวอร์
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Listening on port', port);
});
