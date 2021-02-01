const EventEmitter = require('events');

class Emitter extends EventEmitter {
  log(message) {
    this.emit('logMessage', `${message}`); // emit 'logMessage' event
  }
}

const someEmitter = new Emitter();

someEmitter.on('logMessage', data => console.log(data)); // listener for 'logMessage' event 

someEmitter.log('Hello');
someEmitter.log('World'); 
someEmitter.log('!');