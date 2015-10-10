"use strict"
let uuid = require('uuid');

function Car(driverName) {
  this['driver name'] = driverName;
}

let car = new Car('fred');

console.log(car['driver name']);
console.log(car);
