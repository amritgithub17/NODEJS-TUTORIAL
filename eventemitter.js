const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter(); //Creating a new Emitter

// Once WaterFull event is triggered then statements under console.log() will 
// be printed once this event is triggered
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
//   After 3 seconds the code inide setTimeout will be printed
  setTimeout(() => {
    console.log("Please Turn off the motor . It's a gentel reminder!")
  },3000)
});

// Unless and untill the event WaterFull is Triggered the code other thn it will run 
// console.log("Scripts are running");

// To run the event we hav eto type this
// myEmitter.emit('WaterFull');

console.log("Scripts are running");
myEmitter.emit('WaterFull');
console.log("Scripts are still running");
