const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Uncommon Bug: Server crashes on high load due to unhandled exceptions. 
//This happens when the server receives many requests simultaneously, and an error within requestListener is not caught, causing Node.js to terminate unexpectedly. 