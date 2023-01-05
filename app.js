const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //// Allows the request to continue to the next middleware in line || without next it will go to the other middleware, ||
});

/// Without the next() it will not read this middleware
app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express </h1>");
});

app.listen(3000); /// the same as the bottom
// const server = http.createServer(app);
// server.listen(3000);
