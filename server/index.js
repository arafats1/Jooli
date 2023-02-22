const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello world');
  });

server.listen(4000, () => 'Server is running on port 4000');