const http = require("http");
const fs = require("fs");

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();

  const url = req.url;
  const method = req.method;
  /// if the visited url is / in the root
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    /// return will fixed the non blocking code
    return req.on("end", () => {
      /// call back
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);

      console.log(parsedBody);
      // fs.writeFile("message.txt", "DUMMY");
      // fs.writeFileSync("message.txt", "DUMMY");
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
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
