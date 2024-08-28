const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const option = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

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
  } else if (req.url === "/about") {
    res.setHeader("content-type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ product: "product1" }));
  } else {
    res.setHeader("content-type", "application/json");
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const port = 3008;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
