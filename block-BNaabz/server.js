// Requires
const express = require('express');
const mongoose = require('mongoose');

// // Connect to database
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'connected');
  }
);

// Instantiate the app
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

// Listening
app.listen(3000, () => {
  console.log(`Server is listening on PORT 3000`);
});
