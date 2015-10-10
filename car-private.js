"use strict"
let uuid = require('uuid');

function Car(color) {
  var v = color;
  this.getColor = function(color) {
    return v;
  }
}

let car = new Car(5);

console.log(car.getColor());
console.log(car);
