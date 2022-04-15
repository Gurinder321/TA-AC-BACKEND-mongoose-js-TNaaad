const express = require('express');
const PORT = 3000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017');

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
