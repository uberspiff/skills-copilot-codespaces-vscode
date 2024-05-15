// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with a JSON object that represents a list of comments. Each comment should have a user, message, and timestamp property.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/comments') {
    const comments = [
      { user: 'Alice', message: 'Hi', timestamp: new Date().getTime() },
      { user: 'Bob', message: 'Hello', timestamp: new Date().getTime() },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000);
console.log('Server is listening on http://localhost:3000');
