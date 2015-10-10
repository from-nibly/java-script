'use strict';
function Foo() {
  this.call = function() {
    Foo.count++;
    return Foo.count;
  };
}

Foo.count = 0;

let foo = new Foo();
let foo1 = new Foo();

console.log(foo.call());
console.log(foo1.call());
