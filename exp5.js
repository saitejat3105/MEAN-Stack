const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello!!!');
});

const PORT = 8001;

const server = app.listen(PORT, function (err) {
  if (err) {
    console.error('Server failed to start:', err);
    return;
  }
  const { address, port } = server.address();
  const host = address === '::' ? 'localhost' : address;
  console.log(`Example app listening at http://${host}:${port}`);
});
