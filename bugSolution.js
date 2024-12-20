const http = require('http');

const requestListener = (request, response) => {
  try {
    // Simulate a potential error (remove for a real-world scenario)
    // if (Math.random() < 0.5) throw new Error('Simulated error');

    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});