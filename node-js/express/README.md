INTRODUCTION TO Express.js

EXPRESS
Advices or additional info:
- path can be dynamic, for example: /:id

Main properties&methods:

express
- static(directory) - set static directory
- urlencoded(option) - only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
	option - object

app
- use(options) - write own middleware
- listen(path, callback) - listens for connections on the given path
- get(path, callback) - routes HTTP GET requests to the specified path with the specified callback functions
  callback arguments: req, res, next

request
- params - route parameters, default value - {}
- query - object containing a property for each query string parameter in the route, default value - {}

response
- status(responseStatus) - add response status, for example: 200, 404, 500, etc.
- sendFile(path) - transfers the file at the given path and set 'Content-Type'
- redirect(path) - redirect to path

ROUTER
- Router - create and add routes


EXPRESS-HANDLEBARS
Advices or additional info:
- express-handlebars simplifies working and rendering with html pages
- partials - layout parts, {{> partial }}

Main properties&methods:
app
- engine - register handlebars in express
- set(directory, path) - set configs

exphbs
- create(config) - create instance with own config, config type - object
  config example: { defaultLayout: 'main', 'extname': 'hbs' }

response
- render(path, options) - render file, path without extname, options - optional object