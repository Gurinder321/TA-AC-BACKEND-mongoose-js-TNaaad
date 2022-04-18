const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const User = require('./model/user');

mongoose.connect('mongodb://localhost/samples');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.post('/users', (req, res, next) => {
  // capture the data
  console.log(req.body);
  // save the data to database
  Product.create(req.body, (err, product) => {
    // console.log(err, product);
    console.log(err);
    res.json(product);
  });
  // send response
  res.send(req.body);
});

app.get('/products', (req, res) => {
  Product.find({}, (err, products) => {
    console.log(err, products);
    res.json({ products: products });
  });
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  Product.findById(id, (err, updatedProduct) => {
    console.log(err);
    res.json(product);
  });
});

app.put('/products/:id', (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  Product.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedProduct) => {
    console.log(err);
    res.json(updatedProduct);
  });
});

app.delete('/products/:id', (req, res) => {
  Product.findOneAndDelete({ category: 'phone' }, (err, deletedProduct) => {
    res.send(`${deletedProduct.title} was deleted`);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
