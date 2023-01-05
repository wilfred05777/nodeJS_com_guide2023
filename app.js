const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //// Allows the request to continue to the next middleware in line || without next it will go to the other middleware, ||
});

/// Without the next() it will not read this middleware
app.use((req, res, next) => {
  console.log("In another middleware");
});

const server = http.createServer(app);

server.listen(3000);
