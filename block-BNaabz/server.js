// Requires
const express = require('express');
const mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017');

// Instantiate the app
const app = express();

app.listen(3000);
