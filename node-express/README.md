INTRODUCTION TO Express.js

# EXPRESS
Main properties&methods:

# app
- listen(path, callback) - listens for connections on the given path
- get(path, callback) - routes HTTP GET requests to the specified path with the specified callback functions
  callback arguments: req, res, next

# response
- status(responseStatus) - add response status, for example: 200, 404, 500, etc.
- sendFile(path) - transfers the file at the given path and set 'Content-Type'


# EXPRESS-HANDLEBARS
Main properties&methods:
# app
- engine - register handlebars in express
- set(directory, path) - set configs


# exphbs
- create(config) - create instance with own config, config type - object
  config example: { defaultLayout: 'main', 'extname': 'hbs' }

# response
- render(path) - render file