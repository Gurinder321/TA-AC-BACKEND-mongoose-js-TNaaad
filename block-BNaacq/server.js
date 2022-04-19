const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const Product = require('./models/product');

mongoose.connect('mongodb://localhost/samples');

// mongoose.connect(
//   'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1'
// );

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Homepage');
});
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
