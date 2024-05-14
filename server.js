'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the DevOs Docker Test from David Vocat. Github Actions work now');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
