const fs = require("fs");

// function requestHandler(req, res) {}

///ES6 function
const requestHandler = (req, res) => {
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
      //                           callback (err)
      fs.writeFile("message.txt", message, (err) => {
        /// writeFileSync - it will block next code until such it executed first
        // fs.writeFileSync("message.txt", message);

        console.log(parsedBody);
        // fs.writeFile("message.txt", "DUMMY");
        // fs.writeFileSync("message.txt", "DUMMY");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); // it is better to used writeFile
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
};

//// single exports
// module.exports = requestHandler;

/// exporting multiple functions
module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text"
};

//// other syntax of exporting multiple functions
// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded Text";

//// it can also work this way
// exports.handler = requestHandler;
// exports.someText = "Some hard coded Text";
