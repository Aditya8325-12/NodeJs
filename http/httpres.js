const http = require("http");

const option = {
  hostname: "fakestoreapi.com",
  path: "/products/1",
  method: "GET",
};

const server = http.createServer((rep, res) => {
  const apiRequest = http.request(option, (apiRes) => {
    apiRes.on("data", (data) => {
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      res.end(data);
    });

    apiRes.on("error", (err) => {
      res.setHeader("content-type", "text/plain");
      res.statusCode = 500;
      res.end("Error for getting the data => " + err.message);
    });
  });

  apiRequest.on("error", (err) => {
    res.setHeader("content-type", "text/plain");
    res.statusCode = 500;
    res.end("Error accessing the URL => " + err.message);
  });

  apiRequest.end();
});

server.listen(5001);
