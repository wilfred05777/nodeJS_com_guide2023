const http = require("http");

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
  console.log(req);
});

// http.createServer(rqListener);

server.listen(3000);
