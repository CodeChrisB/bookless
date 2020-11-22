const express = require('express');
//const { Pool, Client } = require('pg');// Constants
const PORT = 3000;
const HOST = '0.0.0.0';// App
const app = express();
app.listen(PORT, HOST);
app.get('/', (req, res) => {
  res.send('Welcome on the Bookless-Server!');
})
console.log(`Running on http://${HOST}:${PORT}`);