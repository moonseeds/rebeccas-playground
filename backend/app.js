const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first middleware response');
  next();
});

app.use((req, res, next) => {
  console.log('second middleware response');
  res.send('hello world');
});

module.exports = app;
