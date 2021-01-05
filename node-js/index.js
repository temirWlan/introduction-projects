const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(`
        <h1>Simple Form</h1>
        <form method="post" action="/">
          <input name="name" type="text" placeholder="enter your name" />
          <button type="submit">
            send
          </button>
        </form>
      `);
      break;
    case 'POST':
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
        break;      
  }
});

server.listen(PORT, () => {
  console.log('Server running...');
});