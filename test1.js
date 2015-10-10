var uuid = require('uuid');

//Javscript notes normal object oriented

function Foo(value) {
  this.value = value;
};

Foo.prototype.getValue = function() {
  return this.value;
};

var foo = new Foo(5);

console.log(foo.getValue());

console.log(foo);

//step 2
//private variables

function Foo2(value) {
  var v = value;
  this.getValue = function(value) {
    return v;
  }
}

foo = new Foo2(5);

console.log(foo.getValue());

console.log(foo);

//step 3
//array like access

function Foo3(value) {

    this[0] = value;
    this.first = function() {
      return this[0];
    }
  }
  // Foo3.prototype = Object.create(Array.prototype);

foo = new Foo3(5);

console.log(foo[0]);
console.log(foo.first());

console.log(foo);
//step 4
//static properties

function Foo4() {
  this.id = uuid.v4();
  this.increment = function() {
    return Foo4.count++;
  }
}

Foo4.count = 0;

foo = new Foo4();
console.log(foo.id, foo.increment());
foo = new Foo4();
console.log(foo.id, foo.increment());

//step 5
//singleton

function Foo5() {
  this.id = uuid.v4();  
}
var instance;
Foo5.instance = function() {
  if(!instance) {
    instance = new Foo5();
  }
  return instance;
}

console.log(Foo5.instance());
console.log(Foo5.instance());
