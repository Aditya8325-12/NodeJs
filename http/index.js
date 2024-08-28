const https = require("http");

const server = https.createServer((rep, res) => {
  if (rep.url === "/") {
    res.write("<h1> node js server start</h1>");
  }
  if (rep.url === "/about") {
    res.write("<p> about page </p>");
  }
  res.end();
});

server.listen(5001);

console.log("server will statrt on por 5001");
