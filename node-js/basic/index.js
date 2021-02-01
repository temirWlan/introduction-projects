const path = require('path');
const fs = require('fs');
const http = require('http');
const { runInNewContext } = require('vm');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    switch (req.url) {
      case '/': 
        fs.readFile(
          path.join(__dirname, 'views', 'index.html'),
          'utf-8',
          (err, data) => {
            if (err) {
              throw new Error(err);
            }

            res.end(data);
          }
        );
        break;
      case '/about':
        fs.readFile(
          path.join(__dirname, 'views', 'about.html'),
          'utf-8',
          (err, data) => {
            if (err) {
              throw new Error(err);
            }

            res.end(data);
          }
        )
        break;
      case '/api/users':
        res.writeHead(200, {
          'Content-Type': 'text/json'
        });
        fs.readFile(
          path.join(__dirname, 'db.json'),
          (err, data) => {
            if (err) {
              throw new Error(err);
            }

            res.end(data);
          }
        );
        break;
      default: 
          res.end(`<h1>Page not found</h1>`);
    }
      
  } else if (req.method === 'POST') {
    const body = [];
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    req.on('data', data => {
      body.push(Buffer.from(data));
    });
    req.on('end', () => {
      const message = body.toString().split('=')[1];
      res.end(`
        <h3>
          Your name is: ${message}
        </h3>
      `);
    });    
  }
});

server.listen(PORT, () => {
  console.log('Server running...');
});