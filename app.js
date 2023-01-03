const http = require("http");

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
});

// http.createServer(rqListener);

server.listen(3000);
