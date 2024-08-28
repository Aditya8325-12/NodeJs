const http = require("https");

const apikey = "b9bb0fd45a77453c93a873f51e579693";
const server = http.createServer((req, res) => {
  // API request options
  const option = {
    hostname: "api.spoonacular.com",
    path: `/food/ingredients/search?apiKey=b9bb0fd45a77453c93a873f51e579693&query=apple`,
    method: "GET",
  };

  // Create the API request
  const apirequest = http.request(option, (apiRes) => {
    let response = ""; // Declare with 'let' to modify

    apiRes.on("data", (data) => {
      response += data;
    });

    // When the response ends, send the data back to the client
    apiRes.on("end", () => {
      res.statusCode = 200;
      res.setHeader("content-type", "application/json");
      res.end(response); // Send the accumulated response
    });

    // Error handling for the API request
    apiRes.on("error", (err) => {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain");
      res.end("Error occurred while getting the data from Spoonacular.");
    });
  });

  // Error handling for the HTTP request
  apirequest.on("error", (err) => {
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Could not connect to the API site.");
  });

  apirequest.end(); // End the API request
});

const port = 2004;
const hostname = "localhost";

server.listen(port, () => {
  console.log(`server will runnig on  ${hostname}: ${port} `);
});
