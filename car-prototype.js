"use strict"
let uuid = require('uuid');

//Javscript notes normal object oriented

function Car(color) {
  this.color = color;
};

Car.prototype.getColor = function() {
  return this.color;
};


let car = new Car('red');

console.log('car color:\t', car.getColor());
console.log('car:\t\t', car);
