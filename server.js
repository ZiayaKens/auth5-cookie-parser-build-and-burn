const express = require('express');
const app = express();
const cookie =  require("cookie-parser");

app.use(cookie());

app.get('/set', (req,res,next) => {
  res.cookie("foo","bar");
  res.send(res.cookie);
});

app.get('/read', (req,res,next) => {
  res.send(req.cookies);
});

app.get('/clear', (req,res,next) => {
  res.clearCookie("deleteMe");
  res.send(req.cookie);
});

app.listen('3000', () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
