const http = require("http");

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();

  const url = req.url;
  /// if the visited url is / in the root
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});

// http.createServer(rqListener);

server.listen(3000);
