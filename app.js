const http = require("http");
const fs = require("fs");
const routes = require("./routes");

// function rqListener(req, res) {}

// const server = http.createServer(routes);

const server = http.createServer(routes.handler);

// const someText = http.createServer(routes.someText);
console.log(routes.someText);

// const server = http.createServer((req, res) => {});

// http.createServer(rqListener);

server.listen(3000);
