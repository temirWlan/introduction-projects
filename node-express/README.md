INTRODUCTION TO Express.js

Main properties&methods:
- listen(path, callback) - listens for connections on the given path
- get(path, callback) - routes HTTP GET requests to the specified path with the specified callback functions
  callback arguments: req, res, next


Response properties&methods:
- status(responseStatus) - add response status, for example: 200, 404, 500, etc.
- sendFile(path) - transfers the file at the given path and set 'Content-Type'