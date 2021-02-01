MAIN MODULES: 
1) PATH - working with directories and files path 
  - Main properties&methods:
    - basename(__filename) - file name from absolute path 
    - dirname(__filename) - directory name where in file
    - extname(__filename) - file extension
    - parse(__filename) - object with file data 
    - join(__dirname, targetDirectory, targetFile) - generate relative path by options
    - resolve(__dirname, targetDirectory, targetFile) - generate absolute or relative path by  options
2) FS(file system) - working with file system 
  - Advices or additional information: 
    - use async methods for thread
    - callback get error as param and throw error if it required 
  - Main properties&methods(async):
    - mkdir(path, callback) - create directory
    - writeFile(path, content, callback) - create file 
    - appendFile(path, content, callback) - append content in file
    - readFile(path, callback) - read file content
    - rename(path, newPath, callback) - rename filename
3) OS(operation system) - working with OS 
  - Main properties&methods: 
    - platform() - operation system
    - arch() - CPU architecture 
    - cpus() - information about OS 
    - freemem() - free memory in bytes
    - totalmem() - total memory in bytes
    - homedir() - root directory 
    - uptime() - OS uptime 
4) EVENTS - events emitter 
  - Advices or additional information:
    - more modules extends from EventEmitter
    - listen specific(maybe by condition) event from the more events
    - emit method create some event, that will be listen by listener
  - Steps: 
    1) Create variable as EventEmitter
    2) Create new class that will inherit from EventEmitter
    3) Add additional properties or methods 
    4) Emit if it required
  - Main properties&methods:
    - on('event', callback) - listener for events 
    - emit('event', data) - emit event, thereafter listener will execute callback
5) HTTP - http server
  - Advices or additional information:
    - in Node.js you shoud create and configure server 
  - Main properties&methods:
    - createServer(callback) - create HTTP server, callback options: req, res
    - listen(port, callback) - listen HTTP server
