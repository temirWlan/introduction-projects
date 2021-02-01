const path = require('path');


const obj = {
  basename: path.basename(__filename),
  dirname: path.dirname(__filename),
  extname: path.extname(__filename),
  parseObj: path.parse(__filename),
  join: path.join(__dirname, '../', 'index.js'),
  resolve: path.join(__dirname, '/index.js')
};
