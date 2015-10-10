'use strict';
function Foo() {
  Object.defineProperty(this, 'bar', {
    enumerable : false,
    configurable : false,
    writeable : false,
    value : 'static'
  });
}

let foo = new Foo();

console.log(foo.bar);
foo.bar = '123';
console.log(foo.bar);
