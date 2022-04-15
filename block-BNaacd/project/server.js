const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

mongoose.connect(
  'mongodb+srv://gurinder121:Pacificadmin123!m@cluster0.lkw9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
