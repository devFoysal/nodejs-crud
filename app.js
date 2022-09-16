const http = require("http");

const PORT = 8000;
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('/pages/home.html')
  }
  res.end();
});

console.log(`server is running at http://localhost:${PORT}`);

server.listen(PORT);
